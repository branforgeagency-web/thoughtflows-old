param(
    [Parameter(Mandatory=$true)]
    [string]$MainImgPath,
    [Parameter(Mandatory=$true)]
    [string]$SecondaryImgPath,
    [string]$OutputPath = "src\images\thumbnail-\img1.png"
)

Add-Type -AssemblyName System.Drawing

function CreateRoundedRectanglePath([float]$x, [float]$y, [float]$width, [float]$height, [float]$radius) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $diameter = $radius * 2

    $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
    $path.AddArc($x + $width - $diameter, $y, $diameter, $diameter, 270, 90)
    $path.AddArc($x + $width - $diameter, $y + $height - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc($x, $y + $height - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    return $path
}

function DrawImageCover([System.Drawing.Graphics]$g, [System.Drawing.Bitmap]$img, [System.Drawing.Drawing2D.GraphicsPath]$clipPath, [float]$dstX, [float]$dstY, [float]$dstW, [float]$dstH) {
    $state = $g.Save()
    $g.SetClip($clipPath, [System.Drawing.Drawing2D.CombineMode]::Replace)

    $scaleX = $dstW / $img.Width
    $scaleY = $dstH / $img.Height
    $scale = [Math]::Max($scaleX, $scaleY)
    $drawW = $img.Width * $scale
    $drawH = $img.Height * $scale
    $drawX = $dstX + ($dstW - $drawW) / 2
    $drawY = $dstY + ($dstH - $drawH) / 2

    $g.DrawImage($img, [System.Drawing.RectangleF]::new($drawX, $drawY, $drawW, $drawH))
    $g.Restore($state)
}

function DrawShadow([System.Drawing.Graphics]$g, [System.Drawing.Drawing2D.GraphicsPath]$path, [int]$offsetX, [int]$offsetY, [int]$blur) {
    for ($i = $blur; $i -ge 1; $i -= 2) {
        $alpha = [int](35 / ($blur / 2))
        if ($alpha -lt 2) { $alpha = 2 }
        $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($alpha, 0, 0, 0))
        $matrix = New-Object System.Drawing.Drawing2D.Matrix
        $matrix.Translate($offsetX + $i/2, $offsetY + $i/2)
        $shadowPath = $path.Clone()
        $shadowPath.Transform($matrix)
        $g.FillPath($brush, $shadowPath)
        $brush.Dispose()
        $shadowPath.Dispose()
        $matrix.Dispose()
    }
}

$backupPath = "src\images\thumbnail-\img1.backup.png"
if (-not (Test-Path $backupPath)) {
    Copy-Item "src\images\thumbnail-\img1.png" -Destination $backupPath
}

$orig = [System.Drawing.Bitmap]::FromFile((Resolve-Path $backupPath))
$canvasW = $orig.Width
$canvasH = $orig.Height

# Extract video card from original
$cardX = 550
$cardY = 700
$cardW = 665
$cardH = 460
$cardImg = New-Object System.Drawing.Bitmap $cardW, $cardH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$cg = [System.Drawing.Graphics]::FromImage($cardImg)
$cg.DrawImage($orig, [System.Drawing.Rectangle]::new(0, 0, $cardW, $cardH), [System.Drawing.Rectangle]::new($cardX, $cardY, $cardW, $cardH), [System.Drawing.GraphicsUnit]::Pixel)
$cg.Dispose()

# Final composite bitmap
$finalImg = New-Object System.Drawing.Bitmap $canvasW, $canvasH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($finalImg)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# 1. Draw base with dotted lines from original
$g.DrawImage($orig, 0, 0, $canvasW, $canvasH)

# 2. Draw Main Photo: X=200, Y=0, W=668, H=1175, Radius=42
$mainImg = [System.Drawing.Bitmap]::FromFile((Resolve-Path $MainImgPath))
$mainPath = CreateRoundedRectanglePath 200 0 668 1175 42
DrawShadow $g $mainPath 4 8 16
DrawImageCover $g $mainImg $mainPath 200 0 668 1175

# 3. Draw Top-Right Photo: X=750, Y=136, W=505, H=491, Radius=42
$secImg = [System.Drawing.Bitmap]::FromFile((Resolve-Path $SecondaryImgPath))
$topRightPath = CreateRoundedRectanglePath 750 136 505 491 42
DrawShadow $g $topRightPath -4 8 20
DrawImageCover $g $secImg $topRightPath 750 136 505 491

# 4. Redraw Video Card cleanly on top
$g.DrawImage($cardImg, $cardX, $cardY, $cardW, $cardH)

$tmpPath = [System.IO.Path]::GetTempFileName() + ".png"
$finalImg.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$finalImg.Dispose()
$orig.Dispose()
$mainImg.Dispose()
$secImg.Dispose()
$cardImg.Dispose()

Move-Item $tmpPath $OutputPath -Force
Write-Output "Successfully updated $OutputPath"
