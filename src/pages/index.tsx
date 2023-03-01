import React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTheme } from "@/store/slices/user";
import { Button, Grid } from "@nextui-org/react";
import LoginModal from "@/components/molecules/LoginModal";
import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootState) => state.user?.preferences?.theme
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
      <Navbar initialThemeValue={theme} onThemeChange={toggleTheme} />
      <Grid.Container gap={2}>
        <Grid>
          <Button color="primary" auto>
            Primary
          </Button>
        </Grid>
        <Grid>
          <Button color="secondary" auto>
            Secondary
          </Button>
        </Grid>
        <Grid>
          <Button color="success" auto>
            Success
          </Button>
        </Grid>
        <Grid>
          <Button color="warning" auto>
            Warning
          </Button>
        </Grid>
        <Grid>
          <Button color="error" auto>
            Error
          </Button>
        </Grid>
        <Grid>
          <Button color="gradient" auto>
            Gradient
          </Button>
        </Grid>
      </Grid.Container>
      <LoginModal />
    </div>
  );
}
