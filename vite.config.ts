import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 🚀 Optimization for Vercel + Edge Usage
  build: {
    target: "esnext",
    sourcemap: false,
    cssCodeSplit: true,        // Split CSS only if necessary
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: undefined, // ⬅️ Prevents too many small JS chunks (fewer edge requests)
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },

  // 🧱 Cache-friendly headers for static serving
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
