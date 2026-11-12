<#
.SYNOPSIS
  Uploads local media files from src/ to the AWS Amplify Storage S3 bucket
  using scripts/media-manifest.json with exact Content-Type headers.

.EXAMPLE
  # Upload only files actively referenced in code (~379 MB, 541 files):
  .\scripts\upload-media-to-amplify.ps1 -ReferencedOnly

.EXAMPLE
  # Dry run to preview uploads:
  .\scripts\upload-media-to-amplify.ps1 -ReferencedOnly -DryRun

.EXAMPLE
  # Upload all 1,013 files (~746 MB) using a specific AWS CLI profile:
  .\scripts\upload-media-to-amplify.ps1 -Profile my-aws-profile
#>

param(
  [string]$Bucket = "amplify-d16vhnu5amcbsu-ma-thoughtflowsstoragebucke-0tvgcluheq7z",
  [string]$Region = "ap-south-1",
  [string]$Profile = "",
  [switch]$ReferencedOnly,
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

if (-not $DryRun -and -not (Get-Command aws -ErrorAction SilentlyContinue)) {
  Write-Error "AWS CLI ('aws') is not installed or not in PATH. Install AWS CLI v2 and run 'aws configure' first."
  exit 1
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $PSScriptRoot "media-manifest.json"
if (-not (Test-Path $manifestPath)) {
  Write-Error "Manifest not found at $manifestPath"
  exit 1
}

$manifest = Get-Content $manifestPath -Raw | ConvertFrom-Json
$items = $manifest.files
if ($ReferencedOnly) {
  $items = $items | Where-Object { $_.referenced -eq $true }
}

$total = $items.Count
Write-Host "Preparing to upload $total files to s3://$Bucket (region: $Region)..." -ForegroundColor Cyan

$failed = @()
$index = 0

foreach ($item in $items) {
  $index++
  $localFile = Join-Path $repoRoot ($item.localPath -replace "/", "\")
  $s3Uri = "s3://$Bucket/$($item.s3Key)"

  if (-not (Test-Path $localFile)) {
    Write-Warning "[$index/$total] Missing local file: $localFile"
    $failed += $item.localPath
    continue
  }

  if ($DryRun) {
    Write-Host "[$index/$total] DRY RUN: $localFile -> $s3Uri ($($item.contentType))"
    continue
  }

  $args = @(
    "s3", "cp", $localFile, $s3Uri,
    "--region", $Region,
    "--content-type", $item.contentType,
    "--cache-control", "public, max-age=31536000",
    "--only-show-errors"
  )
  if ($Profile -ne "") {
    $args += @("--profile", $Profile)
  }

  Write-Host "[$index/$total] Uploading $($item.s3Key) ($($item.contentType))"
  & aws @args
  if ($LASTEXITCODE -ne 0) {
    Write-Warning "Failed: $($item.localPath)"
    $failed += $item.localPath
  }
}

if ($failed.Count -gt 0) {
  Write-Host "`nCompleted with $($failed.Count) failure(s):" -ForegroundColor Red
  $failed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
  exit 1
}

Write-Host "`nAll $total media files processed successfully." -ForegroundColor Green
