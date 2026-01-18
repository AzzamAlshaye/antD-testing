export const ALL_APP_ROLES = {
  appRoles: 'app Roles',
} as const;

export type ALL_APP_ROLES_KEYS =
  (typeof ALL_APP_ROLES)[keyof typeof ALL_APP_ROLES];
