import AuthProps from "./Auth";

/** Add extra information, reflect from database */
interface UserProps {
  fullname: string;
  username: string;
  auth: AuthProps;
  email?: string;
  phone?: string;
  dob?: string;
}

export default UserProps;
