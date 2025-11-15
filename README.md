# Spotify Browse All - React Project

A React application that recreates the Spotify "Browse all" page based on a Figma design. This project features a dark-themed interface with a sidebar navigation, search header, and a grid of music category cards.

## Features

- **Sidebar Navigation**: Home, Search, and Your Library navigation with playlist options
- **Header**: Navigation arrows, search bar, and authentication buttons
- **Browse All Section**: Grid of 15 music category cards with vibrant colors and images
- **Bottom Banner**: Preview message with sign-up call-to-action
- **Responsive Design**: Built with Tailwind CSS for modern styling

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx      # Left navigation sidebar
│   ├── Header.jsx       # Top header with search
│   ├── BrowseAll.jsx    # Main content area with category grid
│   └── BottomBanner.jsx # Bottom preview banner
├── App.jsx              # Main app component
├── App.css              # App-specific styles
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Application entry point
```

## Notes

- The category card images are loaded from a localhost server (http://localhost:3845) as provided by the Figma design tool. These images may not be available if the Figma server is not running.
- The design uses fixed positioning for layout components to match the Figma design exactly.
- All colors and spacing match the original Figma design specifications.

## License

This project is for educational purposes.
