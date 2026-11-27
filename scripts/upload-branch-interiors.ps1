<#
.SYNOPSIS
  Uploads the Ameerpet, Dilsukhnagar and Kochi interior photos
  (src/images/Interiors/{ameerpet,dilsukhnagar,kochi}/*.jpg) to the
  Amplify Storage S3 bucket under media/images/Interiors/...

.EXAMPLE
  .\scripts\upload-branch-interiors.ps1 -DryRun
  .\scripts\upload-branch-interiors.ps1
  .\scripts\upload-branch-interiors.ps1 -Profile my-aws-profile
#>

param(
  [string]$Bucket = "amplify-d16vhnu5amcbsu-ma-thoughtflowsstoragebucke-0tvgcluheq7z",
  [string]$Region = "ap-south-1",
  [string]$Profile = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

if (-not $DryRun -and -not (Get-Command aws -ErrorAction SilentlyContinue)) {
  Write-Error "AWS CLI ('aws') is not installed or not in PATH. Install AWS CLI v2 and run 'aws configure' first."
  exit 1
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$branches = @("ameerpet", "dilsukhnagar", "kochi")
$failed = @()
$count = 0

foreach ($branch in $branches) {
  $localDir = Join-Path $repoRoot "src\images\Interiors\$branch"
  if (-not (Test-Path $localDir)) {
    Write-Warning "Missing folder: $localDir"
    continue
  }

  Get-ChildItem -Path $localDir -Filter *.jpg | Sort-Object Name | ForEach-Object {
    $count++
    $s3Uri = "s3://$Bucket/media/images/Interiors/$branch/$($_.Name)"

    if ($DryRun) {
      Write-Host "DRY RUN: $($_.FullName) -> $s3Uri"
      return
    }

    $awsArgs = @(
      "s3", "cp", $_.FullName, $s3Uri,
      "--region", $Region,
      "--content-type", "image/jpeg",
      "--cache-control", "public, max-age=31536000",
      "--only-show-errors"
    )
    if ($Profile -ne "") { $awsArgs += @("--profile", $Profile) }

    Write-Host "Uploading $branch/$($_.Name)"
    & aws @awsArgs
    if ($LASTEXITCODE -ne 0) { $failed += "$branch/$($_.Name)" }
  }
}

if ($failed.Count -gt 0) {
  Write-Host "`n$($failed.Count) upload(s) failed:" -ForegroundColor Red
  $failed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
  exit 1
}

Write-Host "`nDone: $count branch interior photos processed." -ForegroundColor Green
Write-Host "Check one: https://$Bucket.s3.$Region.amazonaws.com/media/images/Interiors/ameerpet/ameerpet-interior-01.jpg"
