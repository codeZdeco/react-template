import Code404Page from "./Code404Page";
import Code500Page from "./Code500Page";

const instance: { [code: number]: () => JSX.Element } = {
  404: Code404Page,
  500: Code500Page,
};

export default instance;
