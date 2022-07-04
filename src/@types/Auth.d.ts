import GroupProps from "./Group";
import RoleProps from "./Role";

export interface AuthItemProps {
  role?: RoleProps;
  group?: GroupProps;
}

// Auth interface for role and group restrict users from accessing
type AuthProps = Array<AuthItemProps>;

export default AuthProps;
