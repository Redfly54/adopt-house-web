import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [laravel({
              input: ['resources/css/app.css', 'resources/js/app.js','resources/react/App.jsx'],
              refresh: true,
          })
          ,react()
        ],
});
