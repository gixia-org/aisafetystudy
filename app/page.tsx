"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Video, GitPullRequest, Github, Linkedin, MessageSquare, Bookmark, Youtube } from 'lucide-react';

export default function HomePage() {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleMouseEnter = () => {
    setShowQRCode(true);
  };

  const handleMouseLeave = () => {
    setShowQRCode(false);
  };

  const handleNavClick = (sectionId: string) => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-beige-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-lg fixed w-full z-10">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-blue-900">AI Safety Study Group</h1>
        </div>
        <nav className="space-x-6">
          {['课程', '博客', '关于我们'].map((item, index) => {
            const sectionIds = ['course', 'blog', 'about'];
            return (
              <a
                key={item}
                href={`#${sectionIds[index]}`}
                className="text-lg hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(sectionIds[index]);
                }}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-72 pb-64 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          AI 安全学习小组
        </h2>
        <p className="max-w-xl text-lg mb-8">
          关注AI对齐、伦理、评估、治理、可解释性等前沿话题，促进AI的安全可持续发展。
        </p>
        <a href="#about">
          <Button size="lg" className="px-8">加入</Button>
        </a>
      </section>

      {/* Courses Section */}
      <section id="course" className="px-64 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">课程</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-4">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-blue-600" />
              <CardTitle>研讨会</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>参与深度研讨会，与专家互动。</CardDescription>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <Video className="h-8 w-8 text-blue-600" />
              <CardTitle>讲座</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>聆听主题讲座，拓展视野。</CardDescription>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardHeader>
              <GitPullRequest className="h-8 w-8 text-blue-600" />
              <CardTitle>系列课程</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>系统学习系列课程，循序渐进。</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-12">博客</h3>
        <div className="max-w-lg mx-auto space-y-6">
          {/* 示例博文 1 */}
          <div className="flex items-baseline"> {/* 使用 flex 布局对齐标题和日期 */}
            <span className="text-sm text-gray-500">2025-04-15</span> {/* 日期样式 */}
            <a href="https://zhuanlan.zhihu.com/p/1893366157634928815" target="_blank" className="text-xl font-semibold text-black-700 hover:underline mr-4 ml-4"> {/* 标题样式 */}
            大模型的“神经科学”基础
            </a>
          </div>
          {/* 示例博文 1 */}
          <div className="flex items-baseline"> {/* 使用 flex 布局对齐标题和日期 */}
            <span className="text-sm text-gray-500">2025-03-09</span> {/* 日期样式 */}
            <a href="https://zhuanlan.zhihu.com/p/28938402698" target="_blank" className="text-xl font-semibold text-black-700 hover:underline mr-4 ml-4"> {/* 标题样式 */}
            AI如何在两年内接管世界
            </a>
          </div>
          {/* 示例博文 2 */}
          <div className="flex items-baseline">
            <span className="text-sm text-gray-500">2025-04-04</span>
            <a href="https://zhuanlan.zhihu.com/p/8372533549" target="_blank" className="text-xl font-semibold text-black-700 hover:underline mr-4 ml-4">
            AI Safety资源汇总
            </a>
          </div>
          {/* 示例博文 3 */}
          <div className="flex items-baseline">
            <span className="text-sm text-gray-500">2025-01-11</span>
            <a href="https://zhuanlan.zhihu.com/p/17750373522" target="_blank" className="text-xl font-semibold text-black-700 hover:underline mr-4 ml-4">
            AI日渐增强的自我意识（self-awareness）
            </a>
          </div>
          {/* 你可以在这里添加更多博文条目 */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">关于我们</h3>
        <p className="max-w-2xl mx-auto text-center mb-8">
          AI Safety Study Group 是一个面向大众的学习小组，我们欢迎对AI和AI安全感兴趣的朋友加入。无论你的背景如何，都可以在这里学习AI知识，准备应对未来的社会变革。欢迎通过以下方式加入社区或浏览最新动态。
        </p>
        <div className="flex justify-center space-x-8">
          <div className="relative flex flex-col items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MessageSquare className="h-8 w-8" />
            <span className="text-sm">微信</span>
            {showQRCode && (
              <div className="absolute top-0 mt-[-360px] bg-white p-6 rounded-lg shadow-lg text-center w-64">
                <img src="/qrcode.jpg" alt="QR Code" className="mb-4 w-60 h-72" />
              </div>
            )}
          </div>
          <a href="https://www.zhihu.com/people/wang-jin-ge-67" target="_blank" className="flex flex-col items-center">
            <Bookmark className="h-8 w-8" />
            <span className="text-sm">知乎</span>
          </a>
          <a href="https://space.bilibili.com/69217382" target="_blank" className="flex flex-col items-center">
            <Youtube className="h-8 w-8" />
            <span className="text-sm">Bilibili</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-8 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-gray-600">© 2025 Gixia. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
