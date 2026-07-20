import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/DELETE_WD_007_First_React_Project/",
  plugins: [react()],
  build: { outDir: "docs" },
});
