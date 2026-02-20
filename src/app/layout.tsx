import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Foundational Rehab | Rebuild Your Back From the Ground Up",
  description:
    "A systematic approach to back pain recovery. Start from first principles, rewire your brain-muscle connection, and rebuild strength progressively.",
  keywords: [
    "lower back pain",
    "back rehab",
    "back pain exercises",
    "sciatica exercises",
    "herniated disc recovery",
    "back pain relief",
    "physical therapy exercises",
  ],
  openGraph: {
    title: "Foundational Rehab | Rebuild Your Back From the Ground Up",
    description:
      "Most rehab fails because it skips the foundation. We start from first principles — rewiring your brain-muscle connection and rebuilding strength progressively.",
    url: "https://foundationalrehab.com",
    siteName: "Foundational Rehab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundational Rehab | Rebuild Your Back From the Ground Up",
    description:
      "A systematic approach to back pain recovery. Start from first principles and rebuild strength progressively.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
