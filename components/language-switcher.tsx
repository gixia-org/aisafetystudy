"use client";

import { useLanguage } from '@/lib/language-context';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-2 py-1.5 rounded-lg hover:bg-surface-container"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'zh' ? 'EN' : '中文'}</span>
    </button>
  );
}
