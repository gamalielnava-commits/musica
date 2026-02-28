import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Middleware to handle cross-origin and iframe issues
  app.use((req, res, next) => {
    // Allow iframe embedding
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    // Ensure cookies are iframe-friendly if any are set
    const originalSetHeader = res.setHeader;
    res.setHeader = function (name: string, value: string | number | readonly string[]) {
      if (name.toLowerCase() === 'set-cookie') {
        if (Array.isArray(value)) {
          value = value.map(v => v.includes('SameSite=None') ? v : `${v}; SameSite=None; Secure`);
        } else if (typeof value === 'string') {
          value = value.includes('SameSite=None') ? value : `${value}; SameSite=None; Secure`;
        }
      }
      return originalSetHeader.call(this, name, value);
    };
    
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false, // Disable HMR as per platform guidelines
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
