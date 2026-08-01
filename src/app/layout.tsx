import React from "react";
import "../index.css";

export const metadata = {
  title: "TypeScript Adventure | Academy",
  description:
    "Master TypeScript through an interactive alchemical learning game. Progress through levels, solve challenges, and rebuild the Event Management Kingdom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts + Material Symbols — loaded as <link> for Next.js compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Geist:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-on-background flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
