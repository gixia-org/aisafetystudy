import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ResourceItem {
    name: string;
    description: string;
    url: string;
}

interface ResourceCardProps {
    item: ResourceItem;
    colorTheme?: 'blue' | 'green' | 'purple';
}

export function ResourceCard({ item, colorTheme = 'blue' }: ResourceCardProps) {
    const themeClasses = {
        blue: 'border-l-blue-500 hover:border-l-blue-600 group-hover:text-blue-600',
        green: 'border-l-green-500 hover:border-l-green-600 group-hover:text-green-600',
        purple: 'border-l-purple-500 hover:border-l-purple-600 group-hover:text-purple-600'
    };

    const iconThemeClasses = {
        blue: 'group-hover:text-blue-500',
        green: 'group-hover:text-green-500',
        purple: 'group-hover:text-purple-500'
    };

    return (
        <Card className={`h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-l-4 ${themeClasses[colorTheme]}`}>
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
                aria-label={`访问 ${item.name}`}
            >
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center justify-between">
                        <span className={`transition-colors ${themeClasses[colorTheme].split(' ')[2]}`}>
                            {item.name}
                        </span>
                        <ExternalLink className={`h-4 w-4 text-gray-400 transition-colors flex-shrink-0 ${iconThemeClasses[colorTheme]}`} />
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <CardDescription className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                    </CardDescription>
                </CardContent>
            </a>
        </Card>
    );
}