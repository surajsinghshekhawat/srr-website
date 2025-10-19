# 🚀 Quick Start Guide - Sri Ragavendhira Roadways Website

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
npm install
```

This will install all required packages including:

- React 18
- Tailwind CSS
- Framer Motion
- React Router
- And more...

### 2️⃣ Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### 3️⃣ Configure EmailJS (Optional)

To enable the contact form, you need to set up EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/pages/Contact.jsx` with your credentials:

```javascript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

## 📁 Project Structure

```
srr_web/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── Home.jsx        # Home page
│   │   ├── About.jsx       # About page
│   │   ├── Services.jsx    # Services page
│   │   ├── Fleet.jsx       # Fleet & Network page
│   │   ├── Clients.jsx     # Clients page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind config
└── vite.config.js          # Vite config
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    navy: '#002B5B',  // Change this
    red: '#E63946',    // Change this
    gray: '#F5F5F5',
  }
}
```

### Update Company Info

Edit the following files:

- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact details
- `src/pages/About.jsx` - Company information

### Add Images

Replace placeholder images in:

- `src/pages/Home.jsx` - Hero section
- `src/pages/About.jsx` - Company photos
- `src/pages/Services.jsx` - Service images

## 🚀 Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## 📦 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy! ✨

## 🛠️ Common Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 📱 Testing Responsiveness

The website is fully responsive. Test on:

- Mobile (375px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px+)

## 🎯 Key Features Implemented

✅ Responsive design (mobile-first)
✅ Smooth animations (Framer Motion + AOS)
✅ SEO optimized
✅ Contact form with validation
✅ Google Maps integration
✅ Animated counters
✅ Client carousel
✅ Service cards with hover effects
✅ Professional corporate design

## 📞 Need Help?

Check the main [README.md](README.md) for detailed documentation.

---

**Happy Coding! 🎉**
