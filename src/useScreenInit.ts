import { useEffect } from 'react';

export function useScreenInit(_screenId?: string) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
}
