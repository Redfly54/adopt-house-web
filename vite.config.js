import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import flowbiteReact from "flowbite-react/plugin/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  // server: {
  //   host: '0.0.0.0',
  //   port: 5173,
  //   watch: {
  //     usePolling: true,
  //   },
  // },
});
