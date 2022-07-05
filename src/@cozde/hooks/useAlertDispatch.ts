import { useAppDispatch } from "store";

function useAlertDispatch() {
  const dispatch = useAppDispatch();

  return dispatch;
}

export default useAlertDispatch;
