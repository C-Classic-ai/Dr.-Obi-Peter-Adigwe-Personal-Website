# Dr. Obi Peter Adigwe Personal Website

Personal website and portfolio for Dr. Obi Peter Adigwe.

## What This Does

This is a modern, responsive Single Page Application (SPA) designed to serve as the personal website and professional portfolio for Dr. Obi Peter Adigwe. It showcases his work, background, and contact information through a clean, accessible user interface. 

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite (blazing fast development server and optimized build)
- **Styling**: Tailwind CSS (utility-first CSS framework for rapid UI development)
- **UI Components**: Radix UI Primitives (accessible, unstyled components for building high-quality design systems)
- **Icons**: Lucide React
- **Data Visualization**: Recharts

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have Node.js and npm installed.

### Installation

1. Install all required dependencies:
```bash
npm install
```

### Running the Development Server

2. Start the local Vite development server:
```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173`. 

### Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This will compile the application into the `dist/` directory, ready to be deployed.

## Architecture & Structure

The project follows a standard Vite + React application structure:
- `src/main.tsx`: The main entry point that bootstraps the React application.
- `src/App.tsx`: The primary layout and routing component.
- `src/components/`: Reusable, modular UI components built with Radix UI and styled with Tailwind CSS.
- `src/index.css`: Global stylesheet where Tailwind dependencies are imported.

## Development

The project is configured with Vite's React SWC plugin for extremely fast Fast Refresh during development. It relies heavily on functional components and hooks. Accessible interactive components (like accordions, dialogs, and menus) are powered by Radix UI to ensure semantic HTML and keyboard navigation.