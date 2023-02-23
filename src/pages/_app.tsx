import React from "react";
import {
  NextUIProvider,
  createTheme,
  theme,
  ThemeType,
} from "@nextui-org/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = React.useState<ThemeType>("light");

  React.useEffect(() => {
    setThemeType(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  const theme = createTheme({
    type: themeType,
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
