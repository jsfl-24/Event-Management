# TakeDown 2.0 - Event Management System Frontend

![TakeDown 2.0](https://img.shields.io/badge/TakeDown-2.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-13+-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC.svg)

A modern, responsive event management system frontend for college tech festivals. Built with Next.js, TypeScript, and Tailwind CSS, TakeDown 2.0 provides an intuitive platform for students to discover and register for technical events.

## 🚀 Features

### Core Functionality

- **Event Discovery**: Browse and filter events by day and category
- **User Registration**: Secure signup and login system
- **Event Registration**: Register for individual events with real-time spot tracking
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Dynamic event data with participant counts

### User Experience

- **Smooth Navigation**: Fixed header with scroll effects
- **Interactive UI**: Hover effects and animations throughout
- **Loading States**: Skeleton screens and loading indicators
- **Error Handling**: Graceful error messages and fallback content
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

### Frontend Framework 

- **Next.js 13+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **React 18**: Latest React features with concurrent rendering

### Styling & UI

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable UI components
- **Responsive Design**: Mobile-first approach
- **CSS Animations**: Smooth transitions and hover effects

### Development Tools

- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **Git**: Version control
- **npm/yarn**: Package management

## 📁 Project Structure

```
event-management/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── login/              # Login page
│   │   ├── signup/             # Registration page
│   │   └── register/
│   │       └── [id]/           # Dynamic event registration
│   │           └── page.tsx
│   ├── components/             # Reusable components
│   │   ├── Navigation.tsx      # Header navigation
│   │   ├── HeroSection.tsx     # Landing hero section
│   │   ├── EventsSection.tsx   # Events display
│   │   ├── AboutSection.tsx    # About information
│   │   └── Footer.tsx          # Footer component
│   └── lib/
│       └── api.ts              # API communication layer
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.js             # Next.js configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/takedown-2.0-frontend.git
   cd takedown-2.0-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open application**
   Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Components

### Main Pages

- **Homepage (`/`)**: Hero section, events overview, about information
- **Login (`/login`)**: User authentication
- **Signup (`/signup`)**: User registration
- **Event Registration (`/register/[id]`)**: Individual event registration

### Key Components

#### Navigation Component

- Fixed header with scroll effects
- User authentication status
- Mobile-responsive menu
- Smooth scroll to sections

#### Events Section

- Day-wise event filtering
- Event cards with key information
- Registration buttons
- Spots remaining tracking

#### Hero Section

- Gradient text effects
- Call-to-action buttons
- Event statistics cards
- User authentication awareness

## 🔗 API Integration

### Endpoints Used

```typescript
// Event Management
GET /api/events/          // Fetch all events
GET /api/events/{id}/     // Fetch specific event

// User Authentication
POST /api/users/register/ // User registration
POST /api/users/login/    // User login
GET /api/users/profile/   // User profile

// Event Registration
POST /api/registrations/register/{id}/ // Register for event
GET /api/registrations/my-registrations/ // User's registrations
```

### Fallback Data

The application includes sample data for development and testing when the backend is unavailable.

## 🎨 Design System

### Color Palette

- **Primary**: Zinc shades (900, 800, 700)
- **Accent**: White and blue gradients
- **Text**: White, zinc-300, zinc-400
- **Background**: Zinc-900 to zinc-950

### Typography

- **Headings**: Bold, large sizes with gradients
- **Body**: Clean, readable fonts
- **Interactive**: Hover effects and transitions

### Components

- **Buttons**: Rounded corners, hover effects
- **Cards**: Subtle borders, shadow effects
- **Forms**: Clean inputs with validation
- **Navigation**: Fixed, translucent background

## 📊 Performance Features

### Optimization

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Static Generation**: Pre-rendered pages where possible

### User Experience

- **Loading States**: Smooth loading indicators
- **Error Boundaries**: Graceful error handling
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliance features

## 🧪 Testing & Quality

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting rules
- **Prettier**: Consistent code formatting
- **Component Architecture**: Reusable, modular components

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📈 Future Enhancements

### Planned Features

- [ ] Payment Integration
- [ ] Email Notifications
- [ ] Event Calendar View
- [ ] User Dashboard
- [ ] Admin Panel
- [ ] PWA Support
- [ ] Dark/Light Theme Toggle

### Performance Improvements

- [ ] Service Worker Implementation
- [ ] Advanced Caching Strategies
- [ ] Image Optimization
- [ ] Bundle Size Optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer**: [Your Name]
- **UI/UX Designer**: [Designer Name]
- **Project Manager**: [Manager Name]

## 📞 Support

For support and queries:

- Email: info@takedown2025.com
- GitHub Issues: [Project Issues](https://github.com/your-username/takedown-2.0-frontend/issues)

## 📝 Changelog

### Version 1.0.0 (Current)

- Initial release
- Event management system
- User authentication
- Responsive design
- TypeScript implementation

---

**Built with ❤️ for the tech community**
