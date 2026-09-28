import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://bmswellnest.com"),
  title: {
    default: "BMS Wellnest — Body, Mind & Soul | Holistic Wellness by Chellaiah Edupuganti",
    template: "%s | BMS Wellnest",
  },
  description:
    "BMS Wellnest — founded by Chellaiah Edupuganti. A holistic, human-centered approach to wellness. Evidence-based guidance rooted in listening, designed around Body, Mind and Soul.",
  openGraph: {
    title: "BMS Wellnest — Body, Mind & Soul",
    description:
      "Wellness that looks at the whole you. Body, Mind and Soul — never separately. Founded by Chellaiah Edupuganti.",
    type: "website",
    url: "https://bmswellnest.com",
    siteName: "BMS Wellnest",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMS Wellnest — Body, Mind & Soul",
    description:
      "Holistic wellness rooted in listening. Founded by Chellaiah Edupuganti.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const NO_FLASH_SCRIPT = `
(function(){
  try {
    var key = "bms-theme";
    var stored = localStorage.getItem(key);
    var t = stored || "system";
    var resolved = t === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : t;
    document.documentElement.setAttribute("data-theme", resolved);
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }}
          id="bms-no-flash-theme"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground theme-transition">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
