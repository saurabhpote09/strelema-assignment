# Travel & Tourism React Application

A modern, responsive travel and tourism web application built with React and Vite. This application features a beautiful home page showcasing destinations, categories, and trip planning, along with a protected dashboard for analytics and user management.

## Features

- 🏖️ **Travel Destinations**: Browse and explore various travel destinations
- 📱 **Responsive Design**: Fully responsive design that works on all devices
- 🔐 **Authentication**: Secure login system with protected routes
- 📊 **Dashboard**: Analytics dashboard with charts and statistics
- 🎨 **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- 🚀 **Fast Performance**: Powered by Vite for lightning-fast development and builds

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful UI components
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library
- **React Hook Form** - Form handling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Login Credentials

To access the protected dashboard, use the following credentials:

- **Email**: `admin@gmail.com`
- **Password**: `password`

## Project Structure

```
react-app/
├── public/
│   └── images/          # Image assets
├── src/
│   ├── components/
│   │   ├── common/      # Shared components (Navbar, HeroSection, etc.)
│   │   ├── pages/       # Page components (Home, Dashboard, Login, etc.)
│   │   └── ui/          # UI component library (shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Pages & Routes

- `/` - Home page with hero section, categories, destinations, and trip information
- `/login` - Login page for user authentication
- `/dashboard` - Protected dashboard with analytics and charts (requires authentication)
- `*` - 404 Not Found page

## Authentication

The application uses localStorage to store authentication tokens. After successful login, users are redirected to the dashboard. The dashboard route is protected and requires authentication.

To logout, click on the user profile dropdown in the dashboard and select "Log out".

## Development

This project uses:
- **Vite** for fast HMR (Hot Module Replacement)
- **ESLint** for code linting
- **Tailwind CSS** for styling
- **React Router** for client-side navigation

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## License

This project is private and proprietary.
