# React Portfolio Platform

A responsive agency portfolio platform built with React. Showcase creative projects in a clean gallery, publish new ones through a built-in form, and search across all entries in real time.

**Live demo:** `https://react-portfolio-platform-jade.vercel.app/`

---

## Features

- **Project gallery** — displays project cards in a responsive 2-column grid that reflows gracefully as cards are added
- **Add project form** — publish a new project (title, description, category) and watch it appear in the gallery instantly
- **Live search** — filters the gallery by project name or category as you type

## Tech Stack

| Layer     | Choice                                 |
| --------- | -------------------------------------- |
| Framework | React 18 (Vite)                        |
| Styling   | CSS Modules + CSS custom properties    |
| Icons     | Google Material Symbols Outlined       |
| Font      | Hanken Grotesk (Google Fonts)          |
| Data      | Static JSON (`src/data/projects.json`) |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
git clone https://github.com/m-mukundi/react-portfolio-platform.git
cd react-portfolio-platform
npm install
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for production

```bash
npm run build
```

The output is written to `dist/`.

## Project Structure

```
App
├── HeroSection
└── ProjectManagementAndSearch
    ├── SearchBar
    ├── ProjectFormContainer
    └── ProjectGallery
        └── ProjectCard
```

## Usage

### Adding a project

Fill in the **Add New Project** form on the left (a title is required).

Clicking **Publish Project** appends the card to the gallery and resets the form.

### Searching

Type into the search bar to filter cards by name or category.

Clearing the input restores the full gallery.

### Adding more projects

Edit `src/data/projects.json`. Each entry follows this shape:

```json
{
	"id": 1,
	"name": "Project Name",
	"description": "Short description.",
	"imageSource": "https://...",
	"imageAltText": "Alt text",
	"imageDataAltText": "Detailed description for AI tools",
	"category": "Branding"
}
```

Leave `imageSource` as `""` to show the placeholder thumbnail.

## License

MIT
