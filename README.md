# Modern Web Components Showcase (Lit & Vite)

This repository contains a modernized frontend application showcase demonstrating Web Components built with **Lit 3.x** and compiled/served using **Vite**. 

Previously built with Polymer 3 (7 years ago), it has been completely updated to follow modern standards, lightweight reactive styling, and glassmorphic aesthetics.

## 🚀 Features

- **Lit 3.x Web Components**: Extremely fast, light, and modern standards-compliant elements.
- **Glassmorphic UI**: Vibrant styling utilizing CSS backdrop filters, smooth layout grids, custom scrollbars, and modern typography (`Outfit` / `Inter`).
- **Vite Development Tooling**: Near-instantaneous Hot Module Replacement (HMR) and optimized builds.
- **Interactive Showcase**:
  - `todo-list`: Dynamic task manager with custom checkbox, strike-through completion status, and interactive animations.
  - `container-element` & `special-image`: Click-to-dim reactive graphic showcasing Lit's component state binding.
  - `simple-dom-element` & `dom-element`: Demonstrations of simple shadow DOM rendering.

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Installation

Install dependencies using npm:

```bash
npm install
```

### Run Locally

Launch the Vite local development server:

```bash
npm run dev
```

The app will start at `http://localhost:3000/`.

### Production Build

To build the static application assets for production deployment:

```bash
npm run build
```

The output will be placed in the `dist/` directory.

## 📁 File Structure

- `index.html`: Modern semantic HTML frame loader.
- `index.css`: Global styles, layout, and visual theme tokens.
- `index.js`: Main bundle loader importing all components.
- `todo-list.js` / `todo-item.js`: Reactive todo list components.
- `container-element.js` / `special-image.js`: Click-state parent/child components.
- `simple-dom-element.js` / `demo-element.js`: Hello-world rendering elements.
- `vite.config.js`: Vite options for development and production bundle targets.
