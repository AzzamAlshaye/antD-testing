import { useCallback } from 'react';
import { ALL_APP_ROLES, ALL_APP_ROLES_KEYS } from '../utils/roles';

type RolesConst = keyof typeof ROLES;
type RolesType = Record<RolesConst, boolean>;

type SetRoles = () => RolesType;

const ROLES = {
  app_roles: [ALL_APP_ROLES.appRoles],
} as const;

export interface usePermissionsReturned extends ReturnType<SetRoles> {
  isAllowedToAccessApp: boolean;
  roles: ALL_APP_ROLES_KEYS[];
}

export const usePermissions = (): usePermissionsReturned => {
  const permissions: SetRoles = useCallback(() => {
    const perm: Partial<RolesType> = {};
    Object.keys(ROLES).forEach((permission) => {
      perm[permission as RolesConst] = true;
    });
    return perm as RolesType;
  }, []);

  const isAllowedToAccessApp = true;
  const roles: ALL_APP_ROLES_KEYS[] = [];

  return {
    isAllowedToAccessApp,
    roles,
    ...permissions(),
  };
};
