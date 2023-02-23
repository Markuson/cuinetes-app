import React from 'react'
import { Navbar as _Navbar , Text, styled, Switch} from '@nextui-org/react'
import DarkMode from 'public/assets/icons/darkMode';
import LightMode from 'public/assets/icons/LightMode';

const Box = styled("div", {
  boxSizing: "border-box",
  maxWidth: "100%"
});


export default function Navbar() {
  return (
    <Box>
    <_Navbar variant={'sticky'} isBordered maxWidth={'fluid'}>
      <_Navbar.Content>
      </_Navbar.Content>
      <_Navbar.Content>
        <_Navbar.Item>
          <Switch iconOff={<DarkMode/>} iconOn={<LightMode/>}/>
        </_Navbar.Item>
      </_Navbar.Content>
    </_Navbar>
    </Box>
  )
}
