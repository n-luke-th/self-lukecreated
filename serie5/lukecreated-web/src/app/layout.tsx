import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lukecreated.com"),
  title: { default: "LukeCreated", template: "%s | LukeCreated" },
  description: "A personal Software developer profile by Luke (Kittipich)",
  alternates: {
    canonical: "https://lukecreated.com",
    languages: {
      "en-US": "https://lukecreated.com/en-US",
    },
  },
  openGraph: {
    title: "LukeCreated",
    description: "A personal Software developer profile by Luke (Kittipich)",
    url: "https://lukecreated.com",
    siteName: "LukeCreated",
    images: [{ url: "https://lukecreated.com/og.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider enableSystem={true}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
