import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#6A49FF", soft: "#F2EFFF" } },
      boxShadow: { soft: "0 6px 30px rgba(31,38,135,.12)" }
    },
  },
  plugins: [heroui()],
};
export default config;
