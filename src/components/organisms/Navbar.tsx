import React from 'react'
import { Navbar as _Navbar , Text, styled, Switch, SwitchEvent} from '@nextui-org/react'
import DarkMode from 'public/assets/icons/DarkMode';
import LightMode from 'public/assets/icons/LightMode';

const Box = styled("div", {
  boxSizing: "border-box",
  maxWidth: "100%",
});

export interface NavbarPropsType {
  onThemeChange: (value: 'light' | 'dark') => void;
  initialThemeValue: 'light' | 'dark' | undefined
}

export default function Navbar({initialThemeValue, onThemeChange}:NavbarPropsType) {
  return (
    <Box>
      <_Navbar variant={"sticky"} isBordered maxWidth={"fluid"}>
        <_Navbar.Content></_Navbar.Content>
        <_Navbar.Content>
          <_Navbar.Item>
            <Switch
              initialChecked={ initialThemeValue && initialThemeValue === 'light' ?
            true : false }
              
              iconOff={<DarkMode />}
              iconOn={<LightMode />}
              onChange={(e: SwitchEvent) =>
                onThemeChange(e.target.checked ? "light" : "dark")
              }
            />
          </_Navbar.Item>
        </_Navbar.Content>
      </_Navbar>
    </Box>
  );
}