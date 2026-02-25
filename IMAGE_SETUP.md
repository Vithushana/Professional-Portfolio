# Image Setup Instructions

## Adding Your Profile Image

To add your profile image to the portfolio:

1. **Prepare your image:**
   - Use a square image (recommended: 500x500px or larger)
   - Supported formats: JPG, PNG, WebP
   - Recommended: Use a professional headshot with good lighting

2. **Add the image to your project:**
   - Save your image as `profile.jpg` (or `profile.png`)
   - Place it in the `public/` folder of your project
   - Path: `my-portfolio/public/profile.jpg`

3. **Update the portfolio data (if using a different filename):**
   - Open `src/components/data/portfolio.ts`
   - Find the line: `profileImage: "/profile.jpg"`
   - Change to match your filename: `profileImage: "/your-image-name.jpg"`

4. **Test the image:**
   - Run `npm run dev` to start the development server
   - Your profile image should appear in the Hero section
   - If the image doesn't appear, check the browser console for errors

## Adding a Resume PDF

1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The Resume PDF link will automatically work

## Removing Default Images

The default Vite and React logos are in:
- `public/vite.svg`
- `src/assets/react.svg`

These can be safely deleted if not needed.

## Tips

- Keep image file sizes under 500KB for faster loading
- Use tools like TinyPNG or Squoosh to compress images
- Consider using WebP format for better compression
