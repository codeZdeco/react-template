/**
 * >> AuthContainer
 * Control refresh user information, get accesstoken, refreshtoken, etc
 */
interface AuthContainerProps {
  children: React.ReactNode;
}

function AuthContainer(props: AuthContainerProps) {
  const { children } = props;

  return <>{children}</>;
}

export default AuthContainer;
