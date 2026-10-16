import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Kumar | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Himanshu Kumar Jha - Software Engineer specializing in full-stack web development with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
};
//hi
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
