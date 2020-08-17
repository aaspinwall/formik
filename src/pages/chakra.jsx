import React, { useState } from "react"
import Copybox from "../components/Copybox"
import Options from "../components/Options"
import "../components/styles.css"
import { Box, Button, Heading, Stack, Input, Grid, Flex } from "@chakra-ui/core"
import styled from "styled-components"

const sizes = ["xs", "sm", "md", "lg"]
const variant = ["outline", "ghost", "unstyled", "link", "solid"]

const Home = () => {
  const [sizeCnt, setSizeCnt] = useState(3)
  const [variantCnt, setVariantCnt] = useState(4)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [text, setText] = useState("Button")

  const handleChange = (prop, value, callback) => {
    if (typeof prop === "boolean") {
      callback(!value)
      return
    }
    if (typeof prop === "string") {
      callback(value.target.value)
      return
    }
    const max = prop.length - 1
    if (value === max) {
      callback(0)
    } else {
      callback(value + 1)
    }
  }

  const resultingCode = `
    <Button 
    size="${sizes[sizeCnt]}"
    variant="${variant[variantCnt]}"
    isLoading={${loading ? "true" : "false"}}
    isDisabled={${disabled ? "true" : "false"}}>${text}</Button>
  `

  return (
    <Wrapper
      display="flex"
      justifyContent="center"
      flexDir="column"
      margin="auto"
      p="0 2rem"
      maxW={800}
      mb="2rem"
    >
      <Heading as="h1">💫 Chakra UI 💫</Heading>
      <Box
        backgroundColor="#e2e8f038"
        height="20vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant={variant[variantCnt]}
          size={sizes[sizeCnt]}
          isLoading={loading}
          isDisabled={disabled}
        >
          {text}
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="sm">
          Text
        </Heading>
        <Input
          value={text}
          onChange={e => handleChange(text, e, setText)}
        ></Input>
      </Box>

      <Box>
        <Heading as="h2" size="sm">
          Size
        </Heading>
        <Options fields={sizes} def={sizeCnt} call={res => setSizeCnt(res)} />
      </Box>
      <Box>
        <Heading as="h2" size="sm">
          Variant
        </Heading>
        <Options
          fields={variant}
          def={variantCnt}
          call={res => setVariantCnt(res)}
        />
      </Box>
      <Box>
        <Heading as="h2" size="sm">
          More
        </Heading>
        <Button
          mr="1rem"
          variantColor={loading ? "red" : "gray"}
          onClick={() => handleChange(true, loading, setLoading)}
        >
          Loading
        </Button>
        <Button
          variantColor={disabled ? "red" : "gray"}
          onClick={() => handleChange(true, disabled, setDisabled)}
        >
          Disabled
        </Button>
      </Box>

      <Box>
        <Heading as="h2" size="sm">
          Code:
        </Heading>
        <Copybox text={resultingCode} />
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  > * {
    margin: 1rem 0;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  button {
    margin-bottom: 0.5rem;
  }
`

export default Home
