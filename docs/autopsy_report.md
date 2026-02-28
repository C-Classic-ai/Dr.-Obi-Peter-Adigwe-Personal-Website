# Project Autopsy Report

**Generated:** 2026-02-28T13:11:39+01:00
**Purpose:** Onboard a new AI Orchestrator to this existing codebase.

---

## 1. Project Elevator Pitch
Personal website and portfolio for Dr. Obi Peter Adigwe.

## 2. Core Technology Stack
| Category | Technology |
| :--- | :--- |
| Language | TypeScript |
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| UI Components | Radix UI Primitives, Lucide Icons, Recharts |
| Build Tool | Vite |

## 3. Inferred Architecture
Single Page Application (SPA) driven by Vite and React. The application logic is centralized in `src/App.tsx` and separated into various UI components within the `src/components/` directory.

## 4. Key Modules & Responsibilities
| File/Module | Responsibility |
| :--- | :--- |
| `src/main.tsx` | Entry point for the React application |
| `src/App.tsx` | Main application layout, routing, and state |
| `src/components/` | Reusable React UI components |
| `index.html` | Base HTML template (wrapper for the DOM) |
| `src/index.css` | Global stylesheet (contains Tailwind setup) |

## 5. Inferred Coding Conventions
- **Naming:** PascalCase for components, camelCase for standard variables/functions (inferred based on standard React patterns).
- **Styling:** Utility-first using Tailwind CSS, merged with `tailwind-merge` and `clsx`.
- **Components:** Functional React components using hooks.
- **UI:** Usage of headless accessible UI components (Radix UI).

## 6. Entry Points
- Main Application: `src/main.tsx`
- HTML Shell: `index.html`

## 7. Current State
**Recent Commits:**
```
e17fb7b publish
```

**Open Issues:**
None detected from immediate scanning context.

---

## MISSION BRIEFING (For Orchestrator)

You have now assimilated this codebase.

**Your Directive:**
1. Acknowledge you understand the existing architecture.
2. Adopt the project's coding conventions.
3. Ask the user: "What would you like to build or fix?"
