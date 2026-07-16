import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.2"],
  // Pin the workspace root to this app: a stray lockfile in a parent directory
  // otherwise makes Turbopack watch the whole parent tree (demo/, scrape/).
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
