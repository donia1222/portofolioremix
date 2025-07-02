# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production 
- `npm run start` - Run production build
- `npm run lint` - Run ESLint with cache
- `npm run typecheck` - Run TypeScript compiler checks
- `npm run clean` - Clean build artifacts and rebuild

### Development Workflow
When making changes:
1. Run `npm run dev` for development
2. Before committing, run `npm run lint` and `npm run typecheck` to ensure code quality
3. Use `npm run build` to verify production build works

## Architecture Overview

This is a **Remix-based portfolio website** built with TypeScript, Tailwind CSS, and advanced animations. The architecture follows modern React patterns with full-stack capabilities.

### Key Architectural Patterns

**Component Structure:**
- **Modular Components**: Organized in `/app/components/` with feature-based grouping
- **Client-Side Rendering**: Most components use `"use client"` directive
- **Animation-First**: Heavy use of Framer Motion and AOS for scroll animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS

**State Management:**
- **Local State**: useState hooks for component state
- **Refs for DOM**: useRef for direct DOM manipulation (common for animations)
- **Effect Hooks**: useEffect for lifecycle and side effects

**Data Handling:**
- **Centralized Data**: Type-safe data structures in `/app/data/` (Apps.ts, Webs.ts, blogPosts.ts)
- **API Routes**: Chat functionality at `/app/routes/chat.ts` with OpenAI integration
- **TypeScript First**: Full type safety throughout the application

### Core Technologies
- **Remix**: Full-stack React framework
- **React 18**: With concurrent rendering features
- **TypeScript**: Complete type coverage
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Advanced animations
- **OpenAI API**: AI chat integration
- **Vercel Analytics**: Performance monitoring

### Component Categories

**Layout Components:**
- `Header.tsx` - Responsive navigation with scroll behavior
- `DeliverBlock.tsx` - Hero section with animations
- `CorePrinciplesBlock.tsx` - Principle cards
- `ContactModule.tsx` - Contact forms

**Interactive Components:**
- `Chat.tsx` - AI chat with appointment booking
- `Terminal/` - Simulated command line interface
- `TechnologyCarousel/` - Tech stack showcase

**Animation Components:**
- `CloudTextBlock/` - Text animations
- `Corazones/` - Heart animations
- `PhoneSlideshow/` - Mobile carousels

### Development Patterns

**Animation Patterns:**
- Initialize AOS in components: `AOS.init({ duration: 1000, once: true })`
- Use Framer Motion for complex animations
- Implement scroll-triggered animations with Intersection Observer

**Styling Patterns:**
- Tailwind CSS utilities for responsive design
- Gradient backgrounds: `bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`
- Backdrop effects: `backdrop-blur-sm bg-black/20`

**Performance Patterns:**
- Component-level lazy loading
- Image optimization with responsive images
- Debounced scroll and resize handlers

### File Structure
```
app/
├── components/           # Reusable UI components
├── data/                # Type-safe data structures
├── routes/              # Remix routes and API endpoints
├── styles/              # Additional CSS files
└── root.tsx             # App root with analytics
```

### API Integration
- Chat endpoint at `/app/routes/chat.ts` handles OpenAI API calls
- Appointment booking integrates with WhatsApp
- Error handling with user-friendly messages

### Deployment Notes
- Optimized for Vercel deployment
- Analytics and Speed Insights integrated
- Node.js >=20.0.0 required