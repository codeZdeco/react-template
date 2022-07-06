import { useAppDispatch } from "store";

function useAlertDispatch() {
  const dispatch = useAppDispatch();

  // dispatch()
  return dispatch;
}

export default useAlertDispatch;

/**
 * dispatch(asyncAction()).then().catch((err) => dispatch(alert(err.message)))
 * dispatch(asyncAction()).then()
 */