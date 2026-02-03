# PlatePoint Navigator

PlatePoint Navigator is a modern, responsive web application designed to help users discover local dining spots. It features an interactive map interface, digital menus, and community reviews to provide a seamless food discovery experience.

## 🚀 Technologies Used

This project is built with a modern frontend stack for high performance and type safety:

* **React 18** - UI Library
* **TypeScript** - Static Typing
* **Vite** - Build Tool & Development Server
* **Tailwind CSS** - Utility-first CSS framework
* **Shadcn UI** - Reusable component library
* **Leaflet** - Interactive maps
* **Supabase** - Backend-as-a-Service for data and authentication
* **Framer Motion** - Production-ready animations

## ✨ Key Features

* **Interactive Map-List Interface:** Real-time synchronization between the restaurant list and geographic locations.
* **Advanced Filtering:** Sort restaurants by specific categories like Italian, Vegan, Asian, and more.
* **Digital Menus:** Browse full restaurant menus directly within the application.
* **Community Reviews:** Read authentic feedback and comments from other diners.
* **Optimized Performance:** Fast-loading interface with skeleton states and fluid transitions.

## 🛠️ Local Development

Follow these steps to get the project running on your local machine:

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_URL>
    cd plate-navigator-fix
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```env
    VITE_SUPABASE_URL=your_project_url
    VITE_SUPABASE_ANON_KEY=your_anon_key
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```

## 📦 Building for Production

To create an optimized production build, run:

```sh
npm run build
