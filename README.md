# Bundle Builder

A React application for building and customizing a home security system through a multi-step configuration flow.

The application provides a seamless shopping experience by keeping the builder and the review panel fully synchronized while dynamically updating quantities, pricing, and savings in real time.

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Context API
- Local Storage

---

## Features

### Bundle Builder

- Multi-step accordion interface
- Camera selection
- Variant (color) selection
- Independent quantity for each product variant
- Live selected products counter
- Step-by-step navigation

### Review Panel

- Fully synchronized with the builder
- Quantity controls synchronized with product cards
- Dynamic subtotal calculation
- Automatic savings calculation
- Dynamic total updates
- Checkout confirmation
- Shipping summary

### Persistence

- Save the current configuration using Local Storage
- Automatically restore the saved configuration after page reload

---

## Project Structure

```text
src/
│
├── assets/
├── components/
├── context/
├── data/
├── hooks/
├── pages/
└── App.jsx
```

The application is completely data-driven.

All products, review items, and builder configuration are rendered from dedicated data modules instead of hardcoded JSX, making the application easier to maintain and extend.

---

## Running the Project

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Architecture & Design Decisions

- Used Context API for centralized state management.
- Kept the Builder and Review Panel fully synchronized.
- Stored user configuration in Local Storage for persistence.
- Used JavaScript data modules instead of static JSON files to support direct asset imports while keeping the UI completely data-driven.
- Built reusable and modular components to improve maintainability and scalability.

---

## Notes

The primary focus of this project was implementing a clean architecture and reliable application logic.

Special attention was given to:

- Variant-specific quantity management
- State synchronization between different parts of the application
- Dynamic pricing calculations
- Persistent user configuration
- Reusable component architecture

As a development priority, I focused on delivering all core features and interactions first. With additional time, I would further refine the UI to achieve a more pixel-perfect implementation of the design.

---

## Future Improvements

- Improve responsive behavior on smaller devices
- Add unit and integration tests
- Improve accessibility (ARIA & keyboard navigation)
- Add smooth UI animations and transitions

---

## Live Demo

https://bundle-builder-psi-ruby.vercel.app/

---

## Author

**Ahmed Alashmony**