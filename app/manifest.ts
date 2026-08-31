import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LoMediaStudio",
    short_name: "LoMediaStudio",
    description:
      "Media production agency in Ottawa, Canada. Video production, photography, digital marketing, branding and content creation.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "en-CA",
    categories: ["business", "media", "marketing"],
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}