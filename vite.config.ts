import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  build: {outDir:"./build"},
  plugins: [react()],
  base: "/newport/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})