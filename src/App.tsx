import routes from "configs/routes";
import { StoreProvider, Router, StylesProvider } from "./wrapper";

function App() {
  return (
    <StoreProvider>
      <StylesProvider>
        <Router default='home' routes={routes} />
      </StylesProvider>
    </StoreProvider>
  );
}

export default App;
