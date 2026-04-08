"use client";

import React from 'react';
import { Calendar, Clock, MapPin, User, Play, FileText, ArrowRight } from 'lucide-react';

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
    typeLabels?: Record<string, string>;
  };
}

const typeStyles: Record<string, { bg: string; label: string }> = {
  lecture: { bg: 'bg-primary text-on-primary', label: '讲座' },
  seminar: { bg: 'bg-tertiary text-on-tertiary', label: '研讨会' },
  course: { bg: 'bg-outline text-white', label: '课程' },
};

export function EventCard({ event, translations }: EventCardProps) {
  const style = typeStyles[event.type] || typeStyles.seminar;
  const typeLabel = translations.typeLabels?.[event.type] || style.label;

  return (
    <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:bg-surface-bright transition-all">
      {/* Type color bar */}
      <div className={`h-1.5 ${event.type === 'lecture' ? 'bg-primary' : event.type === 'seminar' ? 'bg-tertiary' : 'bg-outline'}`} />

      <div className="p-6 md:p-8">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`${style.bg} px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest`}>
            {typeLabel}
          </span>
          {event.isUpcoming && (
            <span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-md text-xs font-semibold">
              Upcoming
            </span>
          )}
        </div>

        {/* Date */}
        {event.date && (
          <div className="flex items-center gap-2 text-primary font-bold text-sm mb-3">
            <Calendar className="h-4 w-4" />
            {event.date}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-headline font-bold text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        {/* Meta info */}
        <div className="space-y-1.5 mb-4">
          {event.time && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <Clock className="h-3.5 w-3.5" />
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <MapPin className="h-3.5 w-3.5" />
              <span>{event.location}</span>
            </div>
          )}
          {event.speaker && (
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <User className="h-3.5 w-3.5" />
              <span>{event.speaker}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-xs rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap gap-4">
          {event.videoLink && (
            <a
              href={event.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
            >
              <Play className="h-4 w-4" />
              {translations.watchVideo}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
          {event.documentLink && (
            <a
              href={event.documentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tertiary font-bold text-sm hover:gap-3 transition-all"
            >
              <FileText className="h-4 w-4" />
              {translations.viewDocument}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
          {!event.videoLink && !event.documentLink && event.isUpcoming && (
            <span className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
              {translations.comingSoon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
