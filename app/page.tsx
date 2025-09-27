"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Video, GitPullRequest, Github, Linkedin, MessageCircleMore, Bookmark, Youtube, Target, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/language-switcher';

export default function HomePage() {
  const [showQRCode, setShowQRCode] = useState(false);
  const { t } = useLanguage();

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
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Replace the book icon and text with logo image */}
            <img
              src="/logo.png"
              alt="AI Safety Study Group"
              className="h-10 w-auto object-contain"
            />
          </div>
          {/* Adjust spacing for nav items */}
          <nav className="flex items-center space-x-4 md:space-x-6">
            {[t.nav.events, t.nav.blog, t.nav.about].map((item, index) => {
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
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {/* Adjust top padding to account for fixed header, adjust bottom padding */}
      <section className="flex flex-col items-center text-center pt-72 pb-64 px-4">
        {/* Adjust text size for smaller screens */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8">
          {t.hero.title}
        </h2>
        {/* Adjust text size and max-width */}
        <p className="max-w-md md:max-w-xl text-base md:text-lg mb-8">
          {t.hero.description}
        </p>
        {/* Modify this anchor tag */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor jump
            handleNavClick('about'); // Call the smooth scroll function
          }}
        >
          <Button size="lg" className="px-8">{t.hero.joinButton}</Button>
        </a>
      </section>

      {/* Events Section */}
      {/* Adjust padding significantly for smaller screens, keep large padding for larger screens */}
      <section id="event" className="px-4 md:px-16 lg:px-64 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">{t.events.title}</h3>
        {/* Default to 1 column, switch to 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <a href="https://github.com/gixia-org/aisafetystudy-doc" className="block" target="_blank">
            <Card className="p-4 h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600" />
                <CardTitle>{t.events.seminar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.events.seminar.description}</CardDescription>
              </CardContent>
            </Card>
          </a>
          {/* Card 2 */}
          <Card className="p-4 h-full">
            <CardHeader>
              <Video className="h-8 w-8 text-blue-600" />
              <CardTitle>{t.events.lecture.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t.events.lecture.description}</CardDescription>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <a href="https://github.com/gixia-org/aisafetystudy-doc" className="block" target="_blank">
            <Card className="p-4 h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <GitPullRequest className="h-8 w-8 text-blue-600" />
                <CardTitle>{t.events.course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t.events.course.description}</CardDescription>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

      {/* Blog Section */}
      {/* Adjust padding for smaller screens */}
      <section id="blog" className="px-4 md:px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-12">{t.blog.title}</h3>
        {/* Adjust max-width for better mobile view */}
        <div className="max-w-full md:max-w-lg mx-auto space-y-6">
          {t.blog.posts.map((post, index) => (
            <div key={index} className="flex items-baseline">
              {/* Add fixed width (e.g., w-20) and keep flex-shrink-0 */}
              <span className="text-sm text-gray-500 flex-shrink-0 w-24">{post.date}</span>
              {/* Reduce margin for smaller screens */}
              <a href={post.url} target="_blank" className="text-lg md:text-xl font-semibold text-black-700 hover:underline ml-2 mr-2 md:ml-4 md:mr-4">
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      {/* Adjust padding for smaller screens */}
      <section id="about" className="px-4 md:px-8 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">{t.about.title}</h3>
        <p className="max-w-2xl mx-auto text-center mb-8 text-base md:text-lg">
          {t.about.description}
        </p>
        {/* Adjust spacing for icons */}
        <div className="flex justify-center gap-x-6 md:gap-x-8">
          <a href="mailto:wjg172184@163.com" className="flex flex-col items-center">
            <Mail className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.email}</span>
          </a>
          <div className="relative flex flex-col items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <MessageCircleMore className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.wechat}</span>
            {showQRCode && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg text-center w-48 md:w-64">
                <img src="/qrcode.jpg" alt="QR Code" className="mb-2 w-full h-auto" />
                <span>{t.about.qrCodeText}</span>
              </div>
            )}
          </div>
          <a href="https://www.zhihu.com/people/jingewang" target="_blank" className="flex flex-col items-center">
            <Bookmark className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.zhihu}</span>
          </a>
          <a href="https://www.zhihu.com/ring/host/1911472389268676936" target="_blank" className="flex flex-col items-center">
            <Target className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.circle}</span>
          </a>
          <a href="https://space.bilibili.com/69217382" target="_blank" className="flex flex-col items-center">
            <Youtube className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.bilibili}</span>
          </a>
          <a href="https://www.linkedin.com/company/aisafetystudy" target="_blank" className="flex flex-col items-center">
            <Linkedin className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.linkedin}</span>
          </a>
          <a href="https://github.com/gixia-org/aisafetystudy-doc" target="_blank" className="flex flex-col items-center">
            <Github className="h-8 w-8" />
            <span className="text-sm">{t.about.contact.github}</span>
          </a>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 md:px-8 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">{t.partners.title}</h3>
          <div className="flex justify-center items-center gap-12 md:gap-16">
            <a href="https://according.work/" target="_blank" className="group">
              <img src="/accordingwork-logo.png" alt="According.Work" className="h-12 md:h-16 object-contain group-hover:scale-105 transition-transform duration-300" />
            </a>
            <a href="https://www.tup.tsinghua.edu.cn/" target="_blank" className="group">
              <img src="/tup-logo.png" alt="清华大学出版社" className="h-12 md:h-16 object-contain group-hover:scale-105 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Adjust padding and text size */}
      <footer className="bg-gray-100 py-6 md:py-8 px-4 md:px-8 mt-16">
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <span className="text-xs md:text-sm text-gray-600">{t.footer.copyright}</span>
        </div>
      </footer>
    </div>
  );
}
