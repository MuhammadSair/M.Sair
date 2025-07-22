// app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Sair | Software Engineer & AI, Machine Learning Enthusiast",
  description:
    "Muhammad Sair is a full stack software engineer. View his portfolio, projects, skills, and contact details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="keywords"
          content="Muhammad Sair, Software Engineer, AI, Machine Learning Enthusiast, React, Node.js, Portfolio, MuhammadSair.me"
        />
        <meta name="author" content="Muhammad Sair" />

        <meta
          property="og:title"
          content="Muhammad Sair | Full Stack Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Visit the official portfolio of Muhammad Sair. Explore projects, skills, and contact info."
        />
        <meta property="og:url" content="https://muhammadsair.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://muhammadsair.me/images/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Sair Portfolio" />
        <meta
          name="twitter:description"
          content="Muhammad Sair is a skilled full stack developer and software engineer."
        />
        <meta
          name="twitter:image"
          content="https://muhammadsair.me/images/og-image.jpg"
        />

        <link rel="canonical" href="https://muhammadsair.me" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Sair",
              url: "https://muhammadsair.me",
              sameAs: [
                "https://github.com/MuhammadSair",
                "https://linkedin.com/in/muhammad-sair",
              ],
              jobTitle: "Full Stack Developer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "UET, Lahore",
              },
              worksFor: {
                "@type": "Organization",
                name: "TkTurners (Intern)",
              },
              description:
                "Full stack developer with experience in React, Next.js, Node.js, REST APIs, and deep learning-based geospatial applications. Currently open to new opportunities.",
              image: "https://muhammadsair.me/images/profile.jpg",
            }),
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
