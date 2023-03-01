import React from 'react'
import { Navbar as _Navbar , Text, styled, Switch, SwitchEvent, useTheme} from '@nextui-org/react'
import { useTheme as useNextTheme } from "next-themes";

import DarkMode from 'public/assets/icons/svg/DarkMode';
import LightMode from 'public/assets/icons/svg/LightMode';

const Box = styled("div", {
  boxSizing: "border-box",
  maxWidth: "100%",
});

export interface NavbarPropsType {
  onThemeChange: (value: 'light' | 'dark') => void;
  initialThemeValue: 'light' | 'dark' | undefined
}

export default function Navbar({initialThemeValue, onThemeChange}:NavbarPropsType) {
  const {setTheme} = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Box>
      <_Navbar variant={"sticky"} isBordered maxWidth={"fluid"}>
        <_Navbar.Content></_Navbar.Content>
        <_Navbar.Content>
          <_Navbar.Item>
            <Switch
              initialChecked={ initialThemeValue && initialThemeValue === 'light' ?
            true : false }
              checked={!isDark}
              iconOff={<DarkMode />}
              iconOn={<LightMode />}
              onChange={(e: SwitchEvent) =>
                setTheme(e.target.checked ? "light" : "dark")
              }
            />
          </_Navbar.Item>
        </_Navbar.Content>
      </_Navbar>
    </Box>
  );
}