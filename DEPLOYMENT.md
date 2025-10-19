# 🚀 Production Deployment Guide - Sri Ragavendhira Roadways

## ✅ Pre-Deployment Checklist

### 1. Code Quality

- [x] All duplicate files removed
- [x] No unused images or assets
- [x] Console errors removed (kept error handling)
- [x] All routes tested
- [x] Responsive design verified on all devices
- [x] No broken links or images

### 2. Configuration

- [ ] Update contact information in:
  - `src/components/Footer.jsx`
  - `src/pages/Contact.jsx`
  - `src/pages/Home.jsx` (header bar)
- [ ] Configure EmailJS in `src/pages/Contact.jsx`:

  ```javascript
  const serviceId = "YOUR_SERVICE_ID";
  const templateId = "YOUR_TEMPLATE_ID";
  const publicKey = "YOUR_PUBLIC_KEY";
  ```

- [ ] Update phone numbers in:
  - `src/pages/Home.jsx` (top header)
  - `src/pages/Contact.jsx`
  - `src/components/Footer.jsx`

### 3. Content Review

- [ ] All branch addresses are correct
- [ ] All client logos are displayed properly
- [ ] Company profile PDF is up to date
- [ ] All statistics are accurate (40+ trucks, 100+ vehicles, etc.)

### 4. SEO Optimization

- [ ] Update meta tags in `index.html`:

  - Title
  - Description
  - Keywords
  - Open Graph tags

- [ ] Add Google Analytics (if needed)
- [ ] Add Google Search Console verification

### 5. Performance

- [ ] Run build and test locally:

  ```bash
  npm run build
  npm run preview
  ```

- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Optimize images if needed
- [ ] Enable gzip compression on server

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Production ready"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite
   - Click "Deploy"
   - Done! ✨

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. **Deploy**: Drag and drop the `dist` folder or connect to GitHub

### Option 3: AWS S3 + CloudFront

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Upload to S3**:

   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront** for CDN

### Option 4: GitHub Pages

1. **Install gh-pages**:

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📋 Post-Deployment Tasks

### 1. Testing

- [ ] Test all pages on live site
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all links work
- [ ] Verify Google Maps load correctly

### 2. Monitoring

- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Set up uptime monitoring
- [ ] Configure analytics

### 3. SEO

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test with Google PageSpeed Insights
- [ ] Verify structured data

## 🔧 Environment-Specific Configurations

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Performance Targets

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security Checklist

- [ ] No API keys in source code (use environment variables)
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Content Security Policy set
- [ ] Regular dependency updates

## 🆘 Troubleshooting

### Build Fails

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Images Not Loading

- Check paths start with `/` for public folder
- Verify files exist in `public/` directory

### Contact Form Not Working

- Verify EmailJS credentials
- Check browser console for errors
- Test with different email addresses

## 📞 Support

For deployment issues or questions:

- Check [Vite Documentation](https://vitejs.dev/)
- Check [React Router Documentation](https://reactrouter.com/)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/)

---

**Ready to Deploy! 🚀**

Last Updated: December 2024
