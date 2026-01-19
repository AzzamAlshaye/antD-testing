export type QuickActionItem = {
  key: string;
  label: string;
  icon: 'plus' | 'refresh' | 'layers';
};

export type RecentlyItem = {
  id: string;
  org: string;
  type: 'Issue' | 'Response';
  reporter: string;
  priority: 'High' | 'Medium' | 'Low';
};

export type TaskItem = {
  id: string;
  category: 'ISSUE' | 'SUPPORT';
  org: string;
  captureSource: string;
  statusText: string;
  statusDotColor: string;
  priority: 'High' | 'Medium';
};

export type TaskTabKey = 'my' | 'sent' | 'unassigned';

export type DashboardHeroCard = {
  donut: {
    mode: 'multi' | 'single';
    value: number;
    label: string;
    colors: string[];
    size?: number;
    strokeWidth?: number;
  };
  rows: Array<{
    label: string;
    value: string;
    dot: string;
  }>;
};

export type DashboardData = {
  heroCards: DashboardHeroCard[];
  quickActions: QuickActionItem[];
  recentlyVisited: RecentlyItem[];
  tasksByTab: Record<TaskTabKey, TaskItem[]>;
  unassignedCount: number;
};
