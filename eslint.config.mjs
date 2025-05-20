import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Example: manual config without any "extends"
  ...compat.config({
    rules: {
      // Turn off specific rules here if needed
      "react/react-in-jsx-scope": "off",
    },
  }),
];
