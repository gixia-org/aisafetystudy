import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI安全学习小组",
  description: "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
  keywords: ["AI安全", "AI对齐", "AI伦理", "AI治理", "机器学习安全", "人工智能安全", "人工智能伦理", "AI Safety", "AI Alignment", "AI Safety Study Group", "AI安全社区", "AI Safety社区", "AI安全社群"],
  authors: [
    { name: "AI安全学习小组" },
    { name: "Gixia" },
    { name: "AI安全共创计划" },
  ],
  creator: "AI安全学习小组",
  publisher: "AI安全学习小组",
  metadataBase: new URL('https://aisafetystudy.gixia.org'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en': '/',
    },
  },
  openGraph: {
    title: "AI安全学习小组",
    description: "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
    url: 'https://aisafetystudy.gixia.org',
    siteName: 'AI Safety Study Group',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1326,
        height: 453,
        alt: 'AI安全学习小组',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI安全学习小组",
    description: "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' }
    ],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI安全学习小组",
    "alternateName": "AI Safety Study Group",
    "url": "https://aisafetystudy.gixia.org",
    "logo": "https://aisafetystudy.gixia.org/logo.png",
    "description": "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
    "sameAs": [
      // Add social media links here
      "https://github.com/gixia-org/aisafetystudy-doc",
      "https://www.linkedin.com/company/aisafetystudy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "email": "contact@aisafetystudy.gixia.org"
    }
  };

  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
