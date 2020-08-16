import React from "react"
import Content from "../components/Content"
import "../components/styles.css"
import { Box, Text } from "@chakra-ui/core"
import theme from "../../gatsby-plugin-chakra-ui/theme"

// Use at the root of your app

const Home = () => {
  return (
    <Box p={8}>
      <Text
        fontSize="xl"
        borderColor={theme.colors.orange}
        border="solid 2px orange"
      >
        Hello World
      </Text>
    </Box>
  )
}

export default Home
