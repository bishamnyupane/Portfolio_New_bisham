import { useState, useEffect } from 'react';

/**
 * Custom hook to display dynamic, accurate Nepal time (Asia/Kathmandu, UTC +5:45)
 */
export function useLocalTime() {
  const [timeString, setTimeString] = useState('--:-- npt');

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      // Calculate Nepal time: UTC offset + 5 hours 45 minutes (5.75 hours)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const nepal = new Date(utc + 5.75 * 3600000);

      const h = nepal.getHours();
      const m = nepal.getMinutes().toString().padStart(2, '0');
      const period = h >= 12 ? 'pm' : 'am';
      const h12 = (h % 12 || 12).toString().padStart(2, '0');

      setTimeString(`${h12}:${m} ${period} npt`);
    }

    updateClock();
    const interval = setInterval(updateClock, 10000);

    return () => clearInterval(interval);
  }, []);

  return timeString;
}
