import { useEffect, useState } from 'react';
import type { DashboardData } from '@interfaces/IDashboard';
import { dashboardMockData, getDashboardData } from '@services/DashboardService';

export const useDashboardData = () => {
  const [data, setData] = useState<DashboardData>(dashboardMockData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getDashboardData()
      .then((res) => {
        if (!active) return;
        setData(res);
      })
      .finally(() => {
        if (!active) return;
        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { data, isLoading };
};
