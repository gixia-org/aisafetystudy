"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function NotificationBanner() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if the notification has been dismissed in this session or local storage if desired.
        // For now, just show it every time or use session storage.
        // The user requirement is "from today until end of December".

        const now = new Date();
        const endDate = new Date('2026-01-01T00:00:00');
        if (now >= endDate) {
            setIsVisible(false);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className="bg-blue-50 border-b border-blue-100 text-blue-900 px-4 py-3 relative">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-4 pr-8">
                <p className="text-sm font-medium">
                    欢迎参与「AI安全共创计划」。我们邀请对 AI 安全（AI Safety）有热情的朋友加入，共同打造中国的 AI 安全社区，以确保人工智能的发展有利于人类社会。
                </p>
                <div className="flex items-center gap-3 shrink-0 justify-center">
                    <a
                        href="https://zhuanlan.zhihu.com/p/1981830459857055788"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline hover:text-blue-700 whitespace-nowrap"
                    >
                        了解详情
                    </a>
                    <a
                        href="https://docs.qq.com/form/page/DTUJrdnhXYVhQZUha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                        立即报名
                    </a>
                </div>
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
