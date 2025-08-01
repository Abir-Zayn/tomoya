import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "react/no-scope-entities": "off", // Next.js does not require React to be in scope
    },
  }),
];

export default eslintConfig;
