# Image Conversion Instructions

## Current Status
Your HEIC image has been copied to the project, but needs to be converted to JPG for web compatibility.

## Quick Conversion Steps

### Option 1: Windows Photos App (Recommended)
1. Navigate to: `d:\13pro\202509__\IMG_E5956.HEIC`
2. Right-click → Open with → Photos
3. Click the three dots menu (•••) in top-right
4. Select "Save As"
5. Choose JPG format
6. Save to: `c:\Users\DELL\OneDrive\Desktop\Y4S1\Porfolio\my-portfolio\public\profile.jpg`

### Option 2: Online Converter
1. Visit: https://convertio.co/heic-jpg/ or https://heictojpg.com/
2. Upload: `d:\13pro\202509__\IMG_E5956.HEIC`
3. Download the converted JPG
4. Rename to `profile.jpg`
5. Move to: `c:\Users\DELL\OneDrive\Desktop\Y4S1\Porfolio\my-portfolio\public\`

## Alternative: If you already have a JPG version

Run this PowerShell command (replace PATH_TO_YOUR_JPG with your actual image path):
```powershell
Copy-Item "PATH_TO_YOUR_JPG.jpg" -Destination "c:\Users\DELL\OneDrive\Desktop\Y4S1\Porfolio\my-portfolio\public\profile.jpg"
```

## After Conversion
The portfolio is already configured to use `/profile.jpg`. Once you save the converted image, refresh your browser to see it appear in the Hero section!

## Why Convert?
HEIC (High Efficiency Image Container) is Apple's image format. While great for storage, most web browsers don't support it. JPG is universally supported across all browsers.
