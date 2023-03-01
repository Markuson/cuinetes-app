import React from "react";
import {
  NextUIProvider,
  createTheme,
  theme,
  ThemeType,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { darkTheme, lightTheme } from "@/colors/themes";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { storeWrapper, store, persistor, RootState } from "../store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = React.useState<ThemeType>("light");
  const { setTheme } = useTheme();
  const selectedTheme = useSelector(
    (state: RootState) => state.user.preferences.theme
  );

  React.useEffect(() => {
    console.log("por aqui pasa: ", selectedTheme);

    const _theme = selectedTheme
      ? selectedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    console.log("THEME: ", _theme);
    setTheme(_theme);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </NextThemesProvider>
      </PersistGate>
    </Provider>
  );
}

export default storeWrapper.withRedux(App);
