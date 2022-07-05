/**
 * @example
 * ```
 * function UserPage() {
 *  const { information } = usePathSelector('state.auth.profile');
 *
 *  return <div>{information.fullname}</div>
 * }
 * ```
 */
import _ from "@lodash";
import { useEffect } from "react";
import { useAppSelector } from "store";

function usePathSelector(path: string) {
  const state = useAppSelector((state) => _.get(state, path));

  useEffect(() => {}, [state]);

  return state as typeof state;
}

export default usePathSelector;
