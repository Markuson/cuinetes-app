// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react";
import { palette } from "./palette";

const mainColors = {
  primaryLight: palette.primary50,
  primaryLightHover: palette.primary100, // commonly used on hover state
  primaryLightActive: palette.primary200, // commonly used on pressed state
  primaryLightContrast: palette.primary300, // commonly used for text inside the component
  primary: palette.primary300,
  primaryBorder: palette.primary200,
  primaryBorderHover: palette.primary300,
  primarySolidHover: palette.primary400,
  primarySolidContrast: "$white", // commonly used for text inside the component
  primaryShadow: palette.primary200,
  secondaryLight: palette.secondary50,
  secondaryLightHover: palette.secondary50, // commonly used on hover state
  secondaryLightActive: palette.secondary100, // commonly used on pressed state
  secondaryLightContrast: palette.secondary200, // commonly used for text inside the component
  secondary: palette.secondary200,
  secondaryBorder: palette.secondary100,
  secondaryBorderHover: palette.secondary200,
  secondarySolidHover: palette.secondary300,
  secondarySolidContrast: "$white", // commonly used for text inside the component
  secondaryShadow: palette.secondary200,
};


// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#f5f4f0",
      ...mainColors,
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      brackground: "#252525",
      ...mainColors
    },
  },
});
