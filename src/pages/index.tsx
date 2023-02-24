import React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "@/components/molecules/LoginModal";
import Navbar from "@/components/organisms/Navbar";
import { RootState } from "@/store";
import { setTheme } from "@/store/slices/preferences";

export default function Home() {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootState) => state.preferences.theme
  );

  const toggleTheme = (newTheme: "light" | "dark") => {
    console.log(newTheme);
    dispatch(setTheme(newTheme));
  };

  return (
    <div>
      <Head>
        <title>Cuinetes</title>
        <meta
          name="description"
          content="Store and share your favourite recipes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        initialThemeValue={theme}
        onThemeChange={toggleTheme}
      />
      <LoginModal />
    </div>
  );
}
