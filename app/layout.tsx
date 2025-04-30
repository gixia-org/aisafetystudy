import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI安全学习小组", // 保持你之前的修改
  description: "关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。",
  icons: {
    icon: '/favicon.svg', // 指向 public 目录下的 SVG 文件
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN"> {/* 建议将语言改为中文 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
