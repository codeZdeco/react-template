import { Alert } from "@cozde/core";

interface SharedContainerProps {
  children: React.ReactNode;
}

function SharedContainer(props: SharedContainerProps) {
  const { children } = props;
  return (
    <>
      {children}
      <Alert />
    </>
  );
}

export default SharedContainer;
