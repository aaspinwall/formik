import React from "react"
import { useClipboard, Button, Flex, Code, Grid } from "@chakra-ui/core"

const Copybox = ({ text }) => {
  const { onCopy, hasCopied } = useClipboard(text)

  return (
    <>
      <Grid mb={2} gridTemplateColumns="1fr 5rem">
        <Code p="1rem">{text}</Code>
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Grid>
    </>
  )
}

export default Copybox
