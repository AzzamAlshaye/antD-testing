import type { DashboardData } from '@interfaces/IDashboard';

export const dashboardMockData: DashboardData = {
  heroCards: [
    {
      donut: {
        mode: 'multi',
        value: 63,
        label: 'Tasks',
        colors: ['#FF8A00', '#7C3AED', '#1F49FF', '#80C62A'],
      },
      rows: [
        { label: 'Issues', value: '12', dot: '#FF8A00' },
        { label: 'Pending Responses', value: '1', dot: '#7C3AED' },
        { label: 'Support Requests', value: '18', dot: '#1F49FF' },
        { label: 'Review', value: '1265', dot: '#80C62A' },
      ],
    },
    {
      donut: {
        mode: 'single',
        value: 63,
        label: 'Team Tasks',
        colors: ['#1F49FF', '#00B3C6'],
      },
      rows: [
        { label: 'Assigned', value: '12', dot: '#1F49FF' },
        { label: 'Unassigned', value: '1', dot: '#00B3C6' },
      ],
    },
  ],
  quickActions: [
    { key: 'create-complaint', label: 'Create Complains', icon: 'plus' },
    { key: 'create-seasons', label: 'Create Seasons', icon: 'refresh' },
    { key: 'create-group', label: 'Create Group', icon: 'layers' },
  ],
  recentlyVisited: [
    {
      id: 'rv-1',
      org: 'Ministry of Health',
      type: 'Issue',
      reporter: 'Reporter name',
      priority: 'High',
    },
    {
      id: 'rv-2',
      org: 'Ministry of Health',
      type: 'Response',
      reporter: 'Reporter name',
      priority: 'High',
    },
    {
      id: 'rv-3',
      org: 'Ministry of Health',
      type: 'Issue',
      reporter: 'Reporter name',
      priority: 'High',
    },
  ],
  tasksByTab: {
    my: [
      {
        id: 't1',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending Investigation',
        statusDotColor: '#EBD400',
        priority: 'High',
      },
      {
        id: 't2',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending Investigation',
        statusDotColor: '#EBD400',
        priority: 'High',
      },
      {
        id: 't3',
        category: 'SUPPORT',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending',
        statusDotColor: '#E83326',
        priority: 'Medium',
      },
      {
        id: 't4',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending Peer Review',
        statusDotColor: '#0052CC',
        priority: 'Medium',
      },
      {
        id: 't5',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending Peer Review',
        statusDotColor: '#0052CC',
        priority: 'Medium',
      },
    ],
    sent: [
      {
        id: 's1',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending Review',
        statusDotColor: '#EA7100',
        priority: 'High',
      },
      {
        id: 's2',
        category: 'SUPPORT',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Pending',
        statusDotColor: '#E83326',
        priority: 'Medium',
      },
    ],
    unassigned: [
      {
        id: 'u1',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Unassigned',
        statusDotColor: '#5E6C84',
        priority: 'High',
      },
      {
        id: 'u2',
        category: 'SUPPORT',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Unassigned',
        statusDotColor: '#5E6C84',
        priority: 'Medium',
      },
      {
        id: 'u3',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Unassigned',
        statusDotColor: '#5E6C84',
        priority: 'Medium',
      },
      {
        id: 'u4',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: 'Capture source',
        statusText: 'Unassigned',
        statusDotColor: '#5E6C84',
        priority: 'High',
      },
    ],
  },
  unassignedCount: 4,
};

export async function getDashboardData(): Promise<DashboardData> {
  return dashboardMockData;
}
