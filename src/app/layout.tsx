import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "@/styles/portfolio.scss";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himanshu Kumar Jha | Software Engineer | Full-Stack Developer",
  description:
    "Software developer focused on building full-stack web applications, reliable backend APIs, and practical software systems using Next.js, React, Node.js, Express, MongoDB, and PostgreSQL.",
  authors: [{ name: "Himanshu Kumar Jha", url: "https://github.com/Jha0987" }],
  creator: "Himanshu Kumar Jha",
  keywords: [
    "Himanshu Kumar Jha",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Socket.IO",
    "Portfolio",
  ],
  metadataBase: new URL("https://himanshu-portfolio-him-e35c.vercel.app"),
  openGraph: {
    title: "Himanshu Kumar Jha | Software Engineer | Full-Stack Developer",
    description:
      "I build practical web applications and backend systems using modern JavaScript technologies, with a focus on clean architecture, reliable APIs, and useful user experiences.",
    url: "https://himanshu-portfolio-him-e35c.vercel.app",
    siteName: "Himanshu Kumar Jha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Kumar Jha | Software Engineer | Full-Stack Developer",
    description:
      "I build practical web applications and backend systems using modern JavaScript technologies.",
    creator: "@Jha0987",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
      data-motion="on"
    >
      <body>{children}</body>
    </html>
  );
}
