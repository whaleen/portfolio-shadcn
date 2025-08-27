# Video Editor Portfolio

A professional video editor portfolio website showcasing award-winning work and industry expertise. Built with Next.js, shadcn/ui components, and Framer Motion animations for a polished, cinematic experience.

## ✨ Key Features

- **Video-First Design**: Embedded YouTube videos with smooth thumbnail-to-video transitions
- **Real Project Showcase**: Features actual award-winning projects with client information
- **Dark/Light Theme Toggle**: Professional theming system using shadcn/ui design tokens
- **Smooth Animations**: Framer Motion powered interactions and scroll animations
- **Individual Project Pages**: Detailed project breakdowns with comprehensive information
- **Professional Contact Integration**: Industry-appropriate contact channels (Instagram, Vimeo, Email)
- **Responsive Experience**: Optimized for all devices and screen sizes

## 🎬 Industry-Specific Features

- **YouTube Video Embeds**: Click any thumbnail to play videos inline
- **Award Recognition**: Prominently displays industry awards and achievements
- **Client Work Showcase**: Features projects for Amazon Prime, Canadian Tire, Canada Soccer
- **Professional Metadata**: Duration, year, client, role, platform distribution info
- **Skills Categorization**: Edit, Color, VFX, AI, Production, Direction tags
- **Studio Branding**: Bitrate Bash and SM Films studio attribution

## 🏗️ Built With

- **Next.js 15** - React framework with App Router and dynamic routing
- **TypeScript** - Type-safe development with project data structures
- **Tailwind CSS** - Utility-first CSS with custom dark theme
- **shadcn/ui** - Professional component library with proper theming
- **Framer Motion** - Production-ready animations and transitions
- **next-themes** - Seamless dark/light mode switching
- **YouTube Embed API** - Native video playback integration

## 📋 Site Structure

1. **Hero Section** - Video editor branding with call-to-action
2. **Featured Project** - Spotlight on most impressive work (Top 5 trailer of 2024)
3. **About Section** - Professional background and technical expertise
4. **Projects Grid** - Showcase of diverse work across genres
5. **Contact Links** - Industry-standard professional channels

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/whaleen/portfolio-shadcn.git
cd portfolio-shadcn
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Content Customization

### Project Data
Update `projects.ts` with your own projects:
```typescript
export const projects: Project[] = [
  {
    id: "p1",
    title: "Your Project Title",
    client: "Client Name", 
    year: 2024,
    tags: ["Edit", "Color", "VFX"],
    videoUrl: "https://youtube.com/watch?v=...",
    // ... more fields
  }
]
```

### Personal Branding
- **Navigation**: Update "SAHIL LULLA" in `src/app/page.tsx`
- **Contact Info**: Modify contact links in `ContactSection`
- **About Text**: Update professional description and skills
- **Featured Project**: Change `p12` ID to highlight different project

### Styling
- **Theme Colors**: Modify shadcn theme in `src/app/globals.css`
- **Animations**: Adjust Framer Motion configs throughout components
- **Layout**: Update responsive breakpoints and spacing

## 📁 Project Architecture

```
src/
├── app/
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Main portfolio page
│   ├── project/[slug]/
│   │   └── page.tsx            # Dynamic project detail pages
│   └── globals.css             # Global styles and theme
├── components/
│   ├── ui/                     # shadcn/ui components
│   └── theme-provider.tsx      # Theme switching logic
└── projects.ts                 # Project data and types
```

## 🔧 Core Components

- **SiteNav**: Fixed navigation with theme toggle and smooth scrolling
- **HeroSection**: Video editor branding with animated typography
- **FeaturedProjectSection**: Award-winning project spotlight with embed
- **AboutSection**: Professional background with skill categorization
- **ProjectsSection**: Grid of work samples with video embeds
- **ContactSection**: Industry-appropriate contact channels
- **ProjectPage**: Individual project detail pages with rich content

## 📱 Responsive Breakpoints

- **Mobile**: 640px+ (sm) - Single column layouts
- **Tablet**: 768px+ (md) - Two column grids  
- **Desktop**: 1024px+ (lg) - Three column project grid
- **Large Desktop**: 1280px+ (xl) - Maximum width containers

## 🎭 Animation System

**Page Load Animations**:
- Staggered content reveal on scroll
- Navigation slide-in from top
- Hero text fade and slide effects

**Interactive Elements**:
- Hover scale effects on cards and buttons
- Theme toggle with smooth transitions  
- Video embed transitions from thumbnail
- Smooth scrolling navigation links

**Video Integration**:
- Click thumbnail to embed YouTube video
- Automatic aspect ratio maintenance
- Fallback to external YouTube link

## 🎥 Video Features

**Embedded Playback**:
- YouTube videos play inline on thumbnail click
- Maintains aspect ratios across all screen sizes
- Smooth transition from placeholder to video

**Professional Presentation**:
- Play button overlays on all video thumbnails
- YouTube branding on external links
- Consistent video metadata display

**Fallback Systems**:
- Picsum Photos for placeholder thumbnails
- External YouTube links if embed fails
- Graceful handling of missing video URLs

## 🚀 Deployment

**Recommended Platforms**:
- [Vercel](https://vercel.com) - Automatic deployments from Git
- [Netlify](https://netlify.com) - Simple drag-and-drop option
- [Railway](https://railway.app) - Full-stack deployment platform

**Build Optimization**:
- Static generation for all routes
- Optimized images and assets
- Minimal JavaScript bundle size

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Professional video editor portfolio showcasing award-winning work in commercials, narrative films, and branded content.*
