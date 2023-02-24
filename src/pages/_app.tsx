import React from "react";
import {
  NextUIProvider,
  createTheme,
  theme,
  ThemeType,
} from "@nextui-org/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { storeWrapper, store, persistor, RootState } from "../store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = React.useState<ThemeType>("light");
  const selectedTheme = useSelector(
    (state: RootState) => state.preferences.theme
  );

  React.useEffect(() => {
    console.log("por aqui pasa: ", selectedTheme);

    const _theme = selectedTheme
      ? selectedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    console.log("THEME: ", _theme);
    setThemeType(_theme);
  }, [selectedTheme]);

  const theme = createTheme({
    type: themeType,
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

export default storeWrapper.withRedux(App);
