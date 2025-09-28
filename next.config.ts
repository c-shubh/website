import type { NextConfig } from "next";
import { WebpackConfigContext } from "next/dist/server/config-shared";
import fs from "node:fs";
import path from "node:path";

const withBlogAssets = (nextConfig: NextConfig): NextConfig => {
  return {
    ...nextConfig,
    webpack: (config, { isServer }: WebpackConfigContext) => {
      // Run this logic on the server build.
      if (isServer) {
        const sourceDir = path.join(process.cwd(), "blog");
        const destDir = path.join(process.cwd(), "public", "images", "blog");

        console.log("Copying blog assets...");

        const postDirs = fs.readdirSync(sourceDir, { withFileTypes: true });

        postDirs.forEach((dir) => {
          const postSlug = path.basename(dir.name);
          const sourcePostDir = path.join(sourceDir, postSlug);
          const destPostDir = path.join(destDir, postSlug);

          const assets = fs
            .readdirSync(sourcePostDir, { withFileTypes: true })
            .filter((file) => {
              return (
                !file.isDirectory() &&
                !file.name.endsWith(".md") &&
                !file.name.endsWith(".mdx")
              );
            })
            .map((file) => file.name);

          if (assets.length > 0) {
            fs.mkdirSync(destPostDir, { recursive: true });
            assets.forEach((asset) => {
              const sourcePath = path.join(sourcePostDir, asset);
              const destPath = path.join(destPostDir, asset);
              fs.copyFileSync(sourcePath, destPath);
              console.log(`${postSlug}: Copied ${asset}`);
            });
          }
        });

        console.log("Asset copying complete.");
      }

      return config;
    },
  };
};

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default withBlogAssets(nextConfig);
