import routes from "configs/routes";
import { StoreProvider, Router } from "./wrapper";

function App() {
  return (
    <StoreProvider>
      <Router default='home' routes={routes} />
    </StoreProvider>
  );
}

export default App;
