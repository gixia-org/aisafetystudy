"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen, Video, GitPullRequest, Github, Linkedin, MessageCircleMore, Bookmark, Youtube, Target, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/language-switcher';
import { EventCard } from '@/components/event-card';
import { ResourceCard } from '@/components/resource-card';
import { useEvents } from '@/lib/use-events';

export default function HomePage() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<'all' | 'seminar' | 'lecture' | 'course'>('all');
  const { t } = useLanguage();
  const { events, loading, error, refresh } = useEvents();

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
            {[t.nav.events, t.nav.resources, t.nav.about].map((item, index) => {
              const sectionIds = ['event', 'resources', 'about'];
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
      <section id="event" className="px-4 md:px-16 lg:px-64 py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">{t.events.title}</h3>

        {/* Event Type Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setSelectedEventType('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedEventType === 'all'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t.events.allTypes}
            </button>
            <button
              onClick={() => setSelectedEventType('seminar')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedEventType === 'seminar'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t.events.eventTypes.seminar.title}
            </button>
            <button
              onClick={() => setSelectedEventType('lecture')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedEventType === 'lecture'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t.events.eventTypes.lecture.title}
            </button>
            <button
              onClick={() => setSelectedEventType('course')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedEventType === 'course'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {t.events.eventTypes.course.title}
            </button>
          </div>
        </div>

        {/* Filter and display events */}
        {(() => {
          // 如果正在加载，显示加载状态
          if (loading) {
            return (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">正在从GitHub加载事件数据...</p>
              </div>
            );
          }

          // 如果加载出错，显示错误信息
          if (error) {
            return (
              <div className="text-center py-12">
                <p className="text-red-600 mb-4">加载事件数据失败: {error}</p>
                <Button onClick={refresh} variant="outline">
                  重试
                </Button>
              </div>
            );
          }

          // 如果没有事件数据，显示空状态
          if (!events || events.length === 0) {
            return (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">暂无活动数据</p>
                <Button onClick={refresh} variant="outline" className="mt-4">
                  刷新数据
                </Button>
              </div>
            );
          }

          // 过滤事件
          const filteredEvents = events.filter(event =>
            selectedEventType === 'all' || event.type === selectedEventType
          );

          // 默认显示前3个事件，如果选择显示全部则显示所有
          const displayEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 3);

          return (
            <>
              {/* 事件列表 */}
              {displayEvents.length > 0 && (
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        translations={{
                          watchVideo: t.events.watchVideo,
                          viewDocument: t.events.viewDocument,
                          registerNow: t.events.registerNow,
                          comingSoon: t.events.comingSoon,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* 显示更多/收起按钮 */}
              {filteredEvents.length > 3 && (
                <div className="text-center mb-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllEvents(!showAllEvents)}
                    className="flex items-center gap-2"
                  >
                    {showAllEvents ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        {t.events.collapse}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        {t.events.viewMore}
                      </>
                    )}
                  </Button>
                </div>
              )}

              {/* No events message */}
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {selectedEventType === 'all' ? t.events.noEvents : t.events.noEventsOfType.replace('{type}', t.events.eventTypes[selectedEventType].title)}
                  </p>
                </div>
              )}
            </>
          );
        })()}
      </section>

      {/* Resources Section */}
      <section id="resources" className="px-4 md:px-8 py-16 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-4">{t.resources.title}</h3>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
          {t.resources.description}
        </p>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Course Websites */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-blue-700">{t.resources.categories.courses.title}</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.resources.categories.courses.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.resources.categories.courses.items.map((item, index) => (
                <ResourceCard key={`course-${index}`} item={item} colorTheme="blue" />
              ))}
            </div>
          </div>

          {/* Bloggers */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Bookmark className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-green-700">{t.resources.categories.bloggers.title}</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.resources.categories.bloggers.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.resources.categories.bloggers.items.map((item, index) => (
                <ResourceCard key={`blogger-${index}`} item={item} colorTheme="green" />
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-purple-700">{t.resources.categories.projects.title}</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.resources.categories.projects.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {t.resources.categories.projects.items.map((item, index) => (
                <ResourceCard key={`project-${index}`} item={item} colorTheme="purple" />
              ))}
            </div>
          </div>
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
