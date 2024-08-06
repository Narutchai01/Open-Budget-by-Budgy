import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "searchBG": "url('https://media.discordapp.net/attachments/1223568336055701515/1270306490972114945/20240806_160340.png?ex=66b3389c&is=66b1e71c&hm=cf8c5b7f40a5775dfa06424ae777e270883a5445d68bec1be95d4181b22a79bf&=&format=webp&quality=lossless&width=1197&height=671')",
        // "footer-texture": "url('/img/footer-texture.svg')",
      },
      colors: {
        newC : "#FFA500",
      },
    },
  },
  plugins: [],
};
export default config;
