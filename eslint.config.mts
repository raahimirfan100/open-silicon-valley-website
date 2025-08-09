import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "url";
import path from "path";

// Ensure FlatCompat resolves from the project root in all Node versions
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

// Align with Next.js recommendations: Core Web Vitals, TypeScript rules, and Prettier integration
export default defineConfig([
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
    ],
    rules: {
      // Content-heavy pages often include quotes/apostrophes in JSX text
      // Disable to avoid requiring HTML entities everywhere
      "react/no-unescaped-entities": "off",
    },
  }),
]);
