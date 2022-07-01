import { StoreProvider, Router, ThemeProvider } from "./wrapper";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
