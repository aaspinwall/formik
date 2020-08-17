// example theme.js

import { theme as defaultTheme } from "@chakra-ui/core"

const theme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,
    transparent: "transparent",
    or: "#ED8936",
    light: "#FAE3E3",
    orange: "#F6AD55",
    black: "#000",
    white: "#fff",
    main: "#C98BB9",
    gray: {
      50: "#f7fafc",
      900: "#1a202c",
    },
  },
}

export default theme
