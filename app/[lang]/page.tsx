"use client";

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import type { Language } from '@/lib/i18n';

const SUPPORTED_LANGS: Language[] = ['zh', 'en'];

export default function LangRedirect() {
    const router = useRouter();
    const params = useParams();
    const { setLanguage } = useLanguage();

    useEffect(() => {
        const lang = params.lang as string;
        if (SUPPORTED_LANGS.includes(lang as Language)) {
            localStorage.setItem('language', lang);
            setLanguage(lang as Language);
        }
        router.replace('/');
    }, [params.lang, setLanguage, router]);

    return null;
}
