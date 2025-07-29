import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/lenis/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Zonomo",
  description:
    "Zonomo is your trusted platform for booking essential services, from home repairs and cleaning to healthcare and pet care. Discover a seamless experience, expert providers, and reliable support—all in one place. Upgrade your everyday with Zonomo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <head />
      <body
        className={`
          ${inter.variable}
          antialiased
        `}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
