# 🚛 Sri Ragavendhira Roadways - Corporate Website

<div align="center">

![Sri Ragavendhira Roadways](https://img.shields.io/badge/Sri%20Ragavendhira%20Roadways-Logistics%20%26%20Transport-1a365d?style=for-the-badge&logo=truck&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, professional corporate website for Sri Ragavendhira Roadways - Driving Reliability Across India**

[Live Website](https://www.sriragavendhiraroadways.com/) • [Report Bug](https://github.com/surajsinghshekhawat/srr-website/issues) • [Request Feature](https://github.com/surajsinghshekhawat/srr-website/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Design System](#-design-system)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Developer](#-developer)
- [License](#-license)

---

## 🎯 About

Sri Ragavendhira Roadways is a leading logistics and transport company in India, specializing in containerized cargo movement and industrial transport services. This corporate website showcases their services, fleet, client portfolio, and provides seamless contact options.

**Key Highlights:**
- 15+ years of experience in logistics
- 40+ owned vehicles and 100+ attached trucks
- 5 branch offices across India
- Specialized in 32ft SXL, 20ft & 32ft MXL container transport

---

## ✨ Features

### 🎨 Design & UX
- **Modern Corporate Design** - Clean, professional aesthetic with smooth animations
- **Fully Responsive** - Mobile-first design optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion and AOS for engaging scroll effects
- **Interactive Elements** - Hover effects, transitions, and micro-interactions

### ⚡ Performance
- **Fast Loading** - Optimized with Vite for lightning-fast performance
- **SEO Optimized** - Meta tags, semantic HTML, and proper structure
- **Image Optimization** - Responsive images with lazy loading
- **Code Splitting** - Automatic route-based code splitting

### 🔧 Functionality
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Interactive Maps** - Google Maps integration for branch locations
- **Client Showcase** - Animated carousel displaying client logos
- **Service Pages** - Detailed service offerings with visual elements

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 with Hooks |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS 3.0 |
| **Animations** | Framer Motion, AOS |
| **Forms** | React Hook Form |
| **Email** | EmailJS |
| **Build Tool** | Vite 5.0 |
| **Icons** | Lucide React |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/surajsinghshekhawat/srr-website.git
   cd srr-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
srr-website/
├── public/              # Static assets
│   ├── images/         # Image files
│   └── srr_logo.png    # Company logo
├── src/
│   ├── components/     # Reusable components
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   ├── Fleet.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

---

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, company stats, services preview, client carousel |
| **About** | Company overview, vision, mission, and values |
| **Services** | Detailed service offerings with features and benefits |
| **Fleet & Network** | Fleet statistics, container specifications, branch locations |
| **Clients** | Client logos and testimonials showcase |
| **Contact** | Contact form and branch location details |

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Navy** | `#1a365d` | Headers, navigation, primary elements |
| **Primary Red** | `#f56565` | CTAs, accents, hover states |
| **Light Gray** | `#F5F5F5` | Backgrounds, cards |
| **White** | `#FFFFFF` | Text on dark backgrounds |

### Typography

- **Headings**: Poppins (700 weight)
- **Body Text**: Inter (400-500 weight)
- **Font Sizes**: Responsive scaling (text-lg to text-5xl)

### Spacing

- Consistent spacing using Tailwind's spacing scale
- Mobile-first padding and margins
- Responsive grid layouts (1 column mobile → 3 columns desktop)

---

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form, configure EmailJS in `src/pages/Contact.jsx`:

```javascript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

Get your credentials from [EmailJS](https://www.emailjs.com/)

### Google Maps

Update branch locations in:
- `src/pages/Fleet.jsx` - Branch map
- `src/pages/Contact.jsx` - Contact locations

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Connect your custom domain
4. Deploy with one click

### Other Platforms

Build the project and deploy the `dist` folder:

```bash
npm run build
```

Deploy to:
- **Netlify** - Drag & drop the `dist` folder
- **AWS S3 + CloudFront** - Upload to S3 bucket
- **GitHub Pages** - Use GitHub Actions
- **Firebase Hosting** - Use Firebase CLI

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

---

## 👨‍💻 Developer

<div align="center">

**Developed with ❤️ by [Suraj Singh Shekhawat](https://www.linkedin.com/in/suraj08/)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj08/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/surajsinghshekhawat)

*Crafting digital experiences that drive business forward*

</div>

---

## 📄 License

© 2024 Sri Ragavendhira Roadways. All rights reserved.

This project is proprietary and confidential.

---

## 📞 Contact

**Sri Ragavendhira Roadways**

- **Email**: srrchennai9@gmail.com
- **Phone**: +91 9884704471
- **Website**: [www.sriragavendhiraroadways.com](https://www.sriragavendhiraroadways.com)
- **Address**: Flat No. 11, 1st Floor, Door No. 19/7, Kilburn Nagar, Madhavaram, Chennai – 600060

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ in India

</div>
