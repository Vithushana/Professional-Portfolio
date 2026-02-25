# HEIC to JPG Converter Script
# This script converts the HEIC image to JPG for web use

$sourcePath = "d:\13pro\202509__\IMG_E5956.HEIC"
$destPath = "c:\Users\DELL\OneDrive\Desktop\Y4S1\Porfolio\my-portfolio\public\profile.jpg"

Write-Host "Converting HEIC to JPG..." -ForegroundColor Cyan

# Method 1: Try using ImageMagick if installed
try {
    $magick = Get-Command magick -ErrorAction Stop
    & magick convert "$sourcePath" "$destPath"
    Write-Host "✓ Converted successfully using ImageMagick!" -ForegroundColor Green
    exit 0
} catch {
    Write-Host "ImageMagick not found, trying alternative methods..." -ForegroundColor Yellow
}

# Method 2: Instructions for manual conversion
Write-Host "`nAutomatic conversion not available. Please use one of these methods:" -ForegroundColor Yellow
Write-Host "`n1. Online Converter (Recommended):" -ForegroundColor Cyan
Write-Host "   - Go to: https://heictojpg.com or https://convertio.co/heic-jpg/"
Write-Host "   - Upload: $sourcePath"
Write-Host "   - Download the JPG file"
Write-Host "   - Save it as: $destPath"

Write-Host "`n2. Windows Photos App:" -ForegroundColor Cyan
Write-Host "   - Open the HEIC file in Windows Photos"
Write-Host "   - Click '...' menu > Save As"
Write-Host "   - Choose JPEG format"
Write-Host "   - Save to: $destPath"

Write-Host "`n3. Quick PowerShell command to open the file:" -ForegroundColor Cyan
Write-Host "   Invoke-Item `"$sourcePath`"`n" -ForegroundColor White

# Open the file for manual conversion
Write-Host "Opening the image file..." -ForegroundColor Green
Invoke-Item "$sourcePath"
