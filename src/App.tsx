import {
  StoreProvider,
  Router,
  ThemeProvider,
  I18nProvider,
  SharedContainer,
} from "./wrapper";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <I18nProvider>
          <SharedContainer>
            <Router />
          </SharedContainer>
        </I18nProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
