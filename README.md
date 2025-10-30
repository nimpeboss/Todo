# My Tasks - Todo List App

A modern, accessible, and user-friendly todo list application built with React and Vite. Stay organized and productive with a clean interface that helps you manage your daily tasks effortlessly.

## ✨ Features

- **✅ Task Management**: Add, complete, and delete tasks with ease
- **📊 Task Tracking**: Real-time counter showing total and completed tasks
- **♿ Accessibility First**: WCAG compliant with full screen reader support
  - Skip navigation links
  - ARIA labels and live regions
  - Keyboard navigation support
  - Semantic HTML structure
- **🎨 Beautiful UI**: Modern design with smooth animations using Tailwind CSS
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **💾 Character Counter**: Visual feedback with 100 character limit per task
- **🎯 Material-UI Integration**: Enhanced UX with tooltips and theme support
- **⚡ Lightning Fast**: Built with Vite for instant hot module replacement

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/nimpeboss/Todo.git
cd todo_list
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open automatically in your browser at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start` or `npm run dev`

Runs the app in development mode with hot module replacement.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.  
Optimizes the build for the best performance with minification and hashing.

### `npm run preview`

Preview the production build locally before deploying.

### `npm test`

Launches the test runner (Vitest) in interactive watch mode.

## 🛠️ Built With

- **[React 19](https://react.dev/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Material-UI](https://mui.com/)** - Component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Vitest](https://vitest.dev/)** - Unit testing framework

## 🎯 Usage

1. **Adding a Task**: Type your task in the input field and click "Add" or press Enter
2. **Completing a Task**: Click the checkbox or the task text to mark it as complete
3. **Deleting a Task**: Click the delete (trash) icon to remove a task
4. **Keyboard Navigation**: Use Tab to navigate, Enter/Space to toggle tasks

## ♿ Accessibility Features

This application is built with accessibility as a priority:

- **Screen Reader Support**: All interactive elements have descriptive labels
- **Keyboard Navigation**: Full keyboard support for all functionality
- **Skip Links**: Quick navigation to main content and task input
- **Live Regions**: Real-time updates announced to screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Semantic HTML**: Proper use of headings, landmarks, and ARIA attributes

## 📁 Project Structure

```
todo_list/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.jsx        # Application entry point
│   ├── index.css       # Global styles
│   └── setupTests.js   # Test configuration
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── vitest.config.js    # Vitest configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Configuration

### Vite Configuration

The project uses Vite for blazing fast development:

- Port: 3000 (auto-opens in browser)
- Output: `build` directory
- React plugin with Fast Refresh

### Testing

Vitest is configured with:

- jsdom environment for DOM testing
- Global test utilities
- Integration with React Testing Library

## 🚀 Deployment

Build the production-ready app:

```bash
npm run build
```

The `build` folder will contain optimized static files ready for deployment to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**nimpeboss**

- GitHub: [@nimpeboss](https://github.com/nimpeboss)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/nimpeboss/Todo/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using React and Vite
