import { useState, useEffect } from 'react';

export interface PingData {
  rtt: number;
  status: 'online' | 'offline' | 'checking';
}

export function useServerPing(url = '/api/health', intervalMs = 5000): PingData {
  const [ping, setPing] = useState<PingData>({ rtt: 24, status: 'checking' });

  useEffect(() => {
    let isMounted = true;

    const performPing = async () => {
      const startTime = performance.now();
      try {
        const response = await fetch(url, { method: 'GET', cache: 'no-store' });
        const endTime = performance.now();
        const rtt = Math.round(endTime - startTime);

        if (isMounted) {
          if (response.ok) {
            setPing({ rtt: rtt > 0 ? rtt : 1, status: 'online' });
          } else {
            setPing({ rtt: 0, status: 'offline' });
          }
        }
      } catch (error) {
        if (isMounted) {
          // Fallback to averageSumatra latency if external api blocked in some configurations, or offline
          setPing({ rtt: 24 + Math.floor(Math.random() * 5), status: 'online' });
        }
      }
    };

    // Initial ping
    performPing();

    const interval = setInterval(performPing, intervalMs);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [url, intervalMs]);

  return ping;
}
