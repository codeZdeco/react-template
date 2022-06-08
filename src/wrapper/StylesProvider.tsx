import { StylesProvider, jssPreset, StylesProviderProps } from "@mui/styles";
import rtl from "jss-rtl";
import { create } from "jss";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function CustomStylesProvider(props: StylesProviderProps) {
  return (
    <StylesProvider jss={jss} {...props}>
      {props.children}
    </StylesProvider>
  );
}

export default CustomStylesProvider;
