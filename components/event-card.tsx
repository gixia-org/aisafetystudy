"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, Play, FileText } from 'lucide-react';

interface EventCardProps {
  event: {
    id: string;
    type: 'seminar' | 'lecture' | 'course';
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    videoLink?: string;
    documentLink?: string;
    speaker?: string;
    tags: string[];
    isUpcoming: boolean;
  };
  translations: {
    watchVideo: string;
    viewDocument: string;
    registerNow: string;
    comingSoon: string;
  };
}

export function EventCard({ event, translations }: EventCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'seminar':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'lecture':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'course':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'seminar':
        return '🔬';
      case 'lecture':
        return '📚';
      case 'course':
        return '🎓';
      default:
        return '📅';
    }
  };

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-blue-500 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{getTypeIcon(event.type)}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(event.type)}`}>
                {event.type === 'seminar' ? '研讨会' : event.type === 'course' ? '课程' : '讲座'}
              </span>
            </div>
            <CardTitle className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {event.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Event Details */}
        <div className="space-y-2 mb-4 p-3 bg-gray-50 rounded-lg">
          {event.date && (
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{event.date}</span>
            </div>
          )}
          {event.time && (
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="font-medium">{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="h-4 w-4 text-purple-600" />
              <span className="font-medium">{event.location}</span>
            </div>
          )}
          {event.speaker && (
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <User className="h-4 w-4 text-orange-600" />
              <span className="font-medium">{event.speaker}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          {event.videoLink && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 text-xs flex-1"
              onClick={() => window.open(event.videoLink, '_blank')}
            >
              <Play className="h-3 w-3" />
              {translations.watchVideo}
            </Button>
          )}

          {event.documentLink && (
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1 text-xs flex-1"
              onClick={() => window.open(event.documentLink, '_blank')}
            >
              <FileText className="h-3 w-3" />
              {translations.viewDocument}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
