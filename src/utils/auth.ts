import { AuthProps, AuthItemProps } from "@types";

export type UserAuthProps = AuthProps;
export type CheckMatchedAuthProps = (
  targetAuth: AuthProps,
  userAuth: UserAuthProps
) => boolean;

/**
 * Check matching auths between component and user
 * @param targetAuth Allowed auths for showing up the component/route
 * @param userAuth Current user auth information
 * @returns Allowed to access or not
 */
const checkMatchedAuth: CheckMatchedAuthProps = (targetAuth, userAuth) => {
  if (targetAuth && userAuth) {
    const checkMatching = (targetAuthItem: AuthItemProps) =>
      userAuth.some(
        (userAuthItem: AuthItemProps) =>
          targetAuthItem?.group === userAuthItem?.group &&
          targetAuthItem?.role === userAuthItem?.role
      );
    const isMatched = targetAuth.some(checkMatching);

    return isMatched;
  }
  return false;
};

export interface AuthUtilsProps {
  checkMatchedAuth: CheckMatchedAuthProps;
}

const instance: AuthUtilsProps = {
  checkMatchedAuth,
};

export default instance;
