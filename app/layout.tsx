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
  title: "AI安全开放社区",
  description: "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
  keywords: ["AI安全", "AI对齐", "AI伦理", "AI治理", "机器学习安全", "人工智能安全", "人工智能伦理", "AI Safety", "AI Alignment", "AI安全学习小组", "AI Safety Study Group", "AI安全开放社区", "Open Community for AI Safety China", "AI安全社区", "AI Safety社区", "AI安全社群", "AI安全共创计划", "中国", "China"],
  authors: [
    { name: "AI安全开放社区" },
  ],
  creator: "AI安全开放社区",
  publisher: "AI安全开放社区",
  metadataBase: new URL('https://aisafetystudy.gixia.org'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en': '/',
    },
  },
  openGraph: {
    title: "AI安全开放社区",
    description: "中文互联网最大的 AI 安全开放性社区，关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，促进 AI 的安全可持续发展。",
    url: 'https://aisafetystudy.gixia.org',
    siteName: 'Open Community for AI Safety China',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1326,
        height: 453,
        alt: 'AI安全开放社区',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI安全开放社区",
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
    "name": "AI安全开放社区",
    "alternateName": "Open Community for AI Safety China",
    "url": "https://aisafetystudy.gixia.org",
    "logo": "https://aisafetystudy.gixia.org/logo.png",
    "description": "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
    "sameAs": [
      // Add social media links here
      "https://github.com/ocasc/doc",
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
