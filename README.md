# Sri Ragavendhira Roadways - Corporate Website

A modern, professional website for **Sri Ragavendhira Roadways (SRR)** - a leading logistics and transport company in India.

## 🚀 Features

- **Modern Design**: Clean, corporate aesthetic with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Animations**: Framer Motion and AOS for smooth scroll effects
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Contact Form**: Integrated with EmailJS for easy communication
- **Fast Loading**: Optimized for speed with Vite build tool

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS** - Animate on scroll
- **React Hook Form** - Form validation
- **EmailJS** - Email service integration
- **Vite** - Fast build tool and dev server

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd srr_web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors

- **Primary Navy**: `#002B5B`
- **Primary Red**: `#E63946`
- **Light Gray**: `#F5F5F5`
- **White**: `#FFFFFF`

### Typography

- **Headings**: Poppins (700)
- **Body**: Inter (400-500)

## 📄 Pages

1. **Home** - Hero section, stats, services preview, client carousel
2. **About** - Company overview, vision, mission, leadership
3. **Services** - Detailed service offerings with animations
4. **Fleet & Network** - Fleet stats, container specs, branch map
5. **Clients** - Client logos and testimonials
6. **Contact** - Contact form and branch locations

## 🔧 Configuration

### EmailJS Setup

To enable the contact form, update the following in `src/pages/Contact.jsx`:

```javascript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

Get your credentials from [EmailJS](https://www.emailjs.com/)

### Google Maps

Update the Google Maps embed URLs in:

- `src/pages/Fleet.jsx`
- `src/pages/Contact.jsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service:

- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a corporate website project. For updates or changes, please contact the development team.

## 📄 License

© 2024 Sri Ragavendhira Roadways. All rights reserved.

## 📞 Contact

**Sri Ragavendhira Roadways**

- Email: info@srrlogistics.com
- Phone: +91 XXX XXX XXXX
- Website: www.srrlogistics.com

---

Built with ❤️ for Sri Ragavendhira Roadways
