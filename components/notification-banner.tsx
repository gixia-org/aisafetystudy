"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import bannerConfig from '@/notification-banner.config.json';

export function NotificationBanner() {
    const [isVisible, setIsVisible] = useState(true);

    // 如果配置关闭或没有主文案，则不显示
    if (!bannerConfig.enabled || !bannerConfig.message) {
        return null;
    }

    if (!isVisible) return null;

    return (
        <div className="bg-blue-50 border-b border-blue-100 text-blue-900 px-4 py-3 relative">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-4 pr-8">
                <p className="text-sm font-medium">
                    {bannerConfig.message}
                </p>
                {(bannerConfig.detailUrl && bannerConfig.detailText) || (bannerConfig.ctaUrl && bannerConfig.ctaText) ? (
                    <div className="flex items-center gap-3 shrink-0 justify-center">
                        {bannerConfig.detailUrl && bannerConfig.detailText && (
                            <a
                                href={bannerConfig.detailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline hover:text-blue-700 whitespace-nowrap"
                            >
                                {bannerConfig.detailText}
                            </a>
                        )}
                        {bannerConfig.ctaUrl && bannerConfig.ctaText && (
                            <a
                                href={bannerConfig.ctaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-blue-700 transition-colors whitespace-nowrap"
                            >
                                {bannerConfig.ctaText}
                            </a>
                        )}
                    </div>
                ) : null}
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-2 top-2 md:top-1/2 md:-translate-y-1/2 p-1.5 text-blue-500 hover:bg-blue-100 rounded-full transition-colors z-10 cursor-pointer"
                aria-label="Close notification"
            >
                <X size={16} />
            </button>
        </div>
    );
}
