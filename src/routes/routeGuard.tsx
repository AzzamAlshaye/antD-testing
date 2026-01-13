import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function RouteGuard({ children }: Props): React.JSX.Element {
  // Placeholder for future auth/role checks.
  return <>{children}</>;
}
