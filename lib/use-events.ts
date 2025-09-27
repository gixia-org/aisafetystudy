"use client";

import { useState, useEffect } from 'react';
import { GitHubEventData } from './github-events';

interface UseEventsResult {
  events: GitHubEventData[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useEvents(): UseEventsResult {
  const [events, setEvents] = useState<GitHubEventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/events');
      const result = await response.json();
      
      if (result.success) {
        setEvents(result.data);
      } else {
        setError(result.error || 'Failed to fetch events');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/events', {
        method: 'POST',
      });
      const result = await response.json();
      
      if (result.success) {
        setEvents(result.data);
      } else {
        setError(result.error || 'Failed to refresh events');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refresh,
  };
}
