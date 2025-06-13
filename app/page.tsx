"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Video, GitPullRequest, Github, Linkedin, MessageCircleMore, Bookmark, Youtube, Target } from 'lucide-react';

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
    // Add overflow-x-hidden to the main container to prevent horizontal scroll
    <div className="min-h-screen bg-beige-50 text-gray-900 overflow-x-hidden">
      {/* Header */}
      {/* Adjust padding for smaller screens (px-4), keep logo fixed size, hide title on small screens */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-lg fixed w-full z-10">
        <div className="flex items-center space-x-2">
          {/* Ensure logo container stays square */}
          <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="text-white" />
          </div>
          {/* Hide title on small screens, show on medium and up */}
          <h1 className="text-xl md:text-2xl font-bold text-blue-900 hidden sm:block">AI Safety Study Group</h1>
        </div>
        {/* Adjust spacing for nav items */}
        <nav className="flex space-x-4 md:space-x-6">
          {['活动', '博客', '关于我们'].map((item, index) => {
            const sectionIds = ['event', 'blog', 'about'];
            return (
              <a
                key={item}
                href={`#${sectionIds[index]}`}
                // Adjust text size for smaller screens
                className="text-base md:text-lg hover:text-blue-600 flex-shrink-0"
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
      {/* Adjust top padding to account for fixed header, adjust bottom padding */}
      <section className="flex flex-col items-center text-center pt-72 pb-64 px-4">
        {/* Adjust text size for smaller screens */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8">
          AI 安全学习小组
        </h2>
        {/* Adjust text size and max-width */}
        <p className="max-w-md md:max-w-xl text-base md:text-lg mb-8">
          关注AI对齐、伦理、评估、治理、可解释性、隐私、攻防等前沿话题，促进AI的安全可持续发展。
        </p>
        {/* Modify this anchor tag */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor jump
            handleNavClick('about'); // Call the smooth scroll function
          }}
        >
          <Button size="lg" className="px-8">加入</Button>
        </a>
      </section>

      {/* Events Section */}
      {/* Adjust padding significantly for smaller screens, keep large padding for larger screens */}
      <section id="event" className="px-4 md:px-16 lg:px-64 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">活动</h3>
        {/* Default to 1 column, switch to 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <a href="https://github.com/gixia-org/aisafetystudy-doc" className="block" target="_blank">
            <Card className="p-4 h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600" />
                <CardTitle>研讨会</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>参与深度研讨会，发表自己的观点</CardDescription>
              </CardContent>
            </Card>
          </a>
          {/* Card 2 */}
          <Card className="p-4 h-full">
            <CardHeader>
              <Video className="h-8 w-8 text-blue-600" />
              <CardTitle>讲座</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>前沿或科普的主题讲座</CardDescription>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <a href="https://github.com/gixia-org/aisafetystudy-doc" className="block" target="_blank">
            <Card className="p-4 h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <GitPullRequest className="h-8 w-8 text-blue-600" />
                <CardTitle>共学课程</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>与其它成员共同学习一门课程</CardDescription>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

      {/* Blog Section */}
      {/* Adjust padding for smaller screens */}
      <section id="blog" className="px-4 md:px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-12">博客</h3>
        {/* Adjust max-width for better mobile view */}
        <div className="max-w-full md:max-w-lg mx-auto space-y-6">
          {/* 示例博文 1 */}
          <div className="flex items-baseline">
            {/* Add fixed width (e.g., w-20) and keep flex-shrink-0 */}
            <span className="text-sm text-gray-500 flex-shrink-0 w-24">2025-04-15</span>
            {/* Reduce margin for smaller screens */}
            <a href="https://zhuanlan.zhihu.com/p/1893366157634928815" target="_blank" className="text-lg md:text-xl font-semibold text-black-700 hover:underline ml-2 mr-2 md:ml-4 md:mr-4">
              大模型的“神经科学”基础
            </a>
          </div>
          {/* 示例博文 2 */}
          <div className="flex items-baseline">
            {/* Add fixed width (e.g., w-20) and keep flex-shrink-0 */}
            <span className="text-sm text-gray-500 flex-shrink-0 w-24">2025-03-09</span>
            <a href="https://zhuanlan.zhihu.com/p/28938402698" target="_blank" className="text-lg md:text-xl font-semibold text-black-700 hover:underline ml-2 mr-2 md:ml-4 md:mr-4">
              AI如何在两年内接管世界
            </a>
          </div>
          {/* 示例博文 3 */}
          <div className="flex items-baseline">
            {/* Add fixed width (e.g., w-20) and keep flex-shrink-0 */}
            <span className="text-sm text-gray-500 flex-shrink-0 w-24">2025-04-04</span>
            <a href="https://zhuanlan.zhihu.com/p/8372533549" target="_blank" className="text-lg md:text-xl font-semibold text-black-700 hover:underline ml-2 mr-2 md:ml-4 md:mr-4">
              AI Safety资源汇总
            </a>
          </div>
          {/* 示例博文 4 */}
          <div className="flex items-baseline">
            {/* Add fixed width (e.g., w-20) and keep flex-shrink-0 */}
            <span className="text-sm text-gray-500 flex-shrink-0 w-24">2025-01-11</span>
            <a href="https://zhuanlan.zhihu.com/p/17750373522" target="_blank" className="text-lg md:text-xl font-semibold text-black-700 hover:underline ml-2 mr-2 md:ml-4 md:mr-4">
              AI日益增强的自我意识（self-awareness）
            </a>
          </div>
          {/* 你可以在这里添加更多博文条目 */}
        </div>
      </section>

      {/* About Section */}
      {/* Adjust padding for smaller screens */}
      <section id="about" className="px-4 md:px-8 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">关于我们</h3>
        <p className="max-w-2xl mx-auto text-center mb-8 text-base md:text-lg">
          AI Safety Study Group 是一个面向大众的学习小组，我们欢迎对AI和AI安全感兴趣的朋友加入。无论你的背景如何，都可以在这里学习AI知识，准备应对未来的社会变革。欢迎通过以下方式加入社区或浏览最新动态。
        </p>
        {/* Adjust spacing for icons */}
        <div className="flex justify-center space-x-6 md:space-x-8">
          <div className="relative flex flex-col items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MessageCircleMore className="h-8 w-8" />
            <span className="text-sm">微信</span>
            {showQRCode && (
              // Adjust QR code popup position and size for mobile if needed
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg text-center w-48 md:w-64">
                <img src="/qrcode.jpg" alt="QR Code" className="mb-2 w-full h-auto" /> {/* Adjust image size */}
                <span>扫码加入微信群</span> {/* Optional: Add text */}
              </div>
            )}
          </div>
          <a href="https://www.zhihu.com/people/wang-jin-ge-67" target="_blank" className="flex flex-col items-center">
            <Bookmark className="h-8 w-8" />
            <span className="text-sm">知乎</span>
          </a>
          <a href="https://www.zhihu.com/ring/host/1911472389268676936" target="_blank" className="flex flex-col items-center">
            <Target className="h-8 w-8" />
            <span className="text-sm">圈子</span>
          </a>
          <a href="https://space.bilibili.com/69217382" target="_blank" className="flex flex-col items-center">
            <Youtube className="h-8 w-8" />
            <span className="text-sm">Bilibili</span>
          </a>
          <a href="https://www.linkedin.com/company/aisafetystudy" target="_blank" className='flex flex-col items-center'>
            <Linkedin className='h-8 w-8' />
            <span className='text-sm'>LinkedIn</span>
          </a>
          <a href="https://github.com/gixia-org/aisafetystudy-doc" target="_blank" className='flex flex-col items-center'>
            <Github className='h-8 w-8' />
            <span className='text-sm'>GitHub</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* Adjust padding and text size */}
      <footer className="bg-gray-100 py-6 md:py-8 px-4 md:px-8 mt-16">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <span className="text-xs md:text-sm text-gray-600">© 2025 Gixia. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
