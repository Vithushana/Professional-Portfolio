# Quick Setup Script
# Run this after downloading the converted JPG from heictojpg.com

Write-Host "`n🖼️  Image Setup for Portfolio" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Check Downloads folder for recently converted images
$downloadsPath = "$env:USERPROFILE\Downloads"
$recentJPG = Get-ChildItem "$downloadsPath\*.jpg" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

if ($recentJPG) {
    Write-Host "Found recent JPG: $($recentJPG.Name)" -ForegroundColor Green
    Write-Host "Moving to portfolio public folder...`n" -ForegroundColor Yellow
    
    $destination = "c:\Users\DELL\OneDrive\Desktop\Y4S1\Porfolio\my-portfolio\public\profile.jpg"
    Copy-Item $recentJPG.FullName -Destination $destination -Force
    
    Write-Host "✓ Image setup complete!" -ForegroundColor Green
    Write-Host "✓ File saved as: profile.jpg" -ForegroundColor Green
    Write-Host "`nYour portfolio will now display your photo!" -ForegroundColor Cyan
} else {
    Write-Host "⚠ No JPG found in Downloads folder" -ForegroundColor Yellow
    Write-Host "`nManual steps:" -ForegroundColor White
    Write-Host "1. Download the converted JPG from heictojpg.com"
    Write-Host "2. Save it as: profile.jpg"
    Write-Host "3. Place it in: c:\Users\DELL\OneDrive\Desktop\Y4S1\Porfolio\my-portfolio\public\"
}

Write-Host "`n================================`n" -ForegroundColor Cyan
