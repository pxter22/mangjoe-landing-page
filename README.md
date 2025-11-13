# Mang Joe's Chicken Inasal - Landing Page

A modern, responsive landing page for Mang Joe's Chicken Inasal, an authentic Filipino BBQ restaurant.

## Tech Stack

- **Next.js 14** (App Router) - React framework with SSR
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern 2025 design trends
- ✅ Smooth scroll animations
- ✅ Filipino-inspired color palette
- ✅ Menu showcase with food items
- ✅ Opening hours display
- ✅ About/Our Story section
- ✅ Contact information and social links
- ✅ Call-to-action buttons

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Menu.tsx            # Menu grid
│   ├── MenuItem.tsx        # Individual menu item
│   ├── About.tsx           # About section
│   ├── Hours.tsx           # Opening hours
│   ├── Footer.tsx          # Footer with contact info
│   └── CTAButton.tsx       # Reusable CTA button
├── lib/
│   └── constants.ts        # Menu data, hours, contact info
└── public/
    ├── logo.svg            # Restaurant logo
    └── menu/               # Menu item images
```

## Color Palette

- **Primary Green**: `#1a5f3f` - Main brand color
- **Accent Yellow**: `#ffd700` - CTAs and highlights
- **Secondary Orange**: `#ff6b35` - Warm accents
- **Tertiary Red**: `#c41e3a` - Special highlights

## Customization

- Update menu items in `lib/constants.ts`
- Replace logo at `public/logo.svg`
- Add menu images to `public/menu/` folder
- Modify colors in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## Acknowledgements

- Built with ❤️ using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).
- Designed and developed by Peter Pei-Te Sun.

## License

All rights reserved. Mang Joe's Chicken Inasal.
