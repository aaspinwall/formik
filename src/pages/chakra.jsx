import React, { useState } from "react"
import Copybox from "../components/Copybox"
import Options from "../components/Options"
import DisplayControls from "../components/DisplayControls"
import "../components/styles.css"
import {
  Box,
  Button,
  Heading,
  Select,
  Stack,
  Input,
  Grid,
  Flex,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core"
import styled from "styled-components"

const sizes = ["xs", "sm", "md", "lg"]
const variant = ["outline", "ghost", "unstyled", "link", "solid"]

const Home = () => {
  const [sizeCnt, setSizeCnt] = useState(3)
  const [variantCnt, setVariantCnt] = useState(4)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [text, setText] = useState("Click me")
  const [elementArray, setArray] = useState([1])
  const [marginVal, setMargin] = useState(1)
  const [paddingVal, setPadding] = useState(1)
  const [color, setColor] = useState("red")

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

  const imports = `import { Button } from "@chakra-ui/core"`

  const resultingCode = `
    <Button 
      size="${sizes[sizeCnt]}"
      variant="${variant[variantCnt]}"
      isLoading={${loading ? "true" : "false"}}
      isDisabled={${disabled ? "true" : "false"}}
      m={"${marginVal}rem"}
      p={"${paddingVal}rem"}
      variantColor={"${color}"}>${text}
    </Button>
  `

  const colors = [
    "transparent",
    "current",
    "black",
    "white",
    "whiteAlpha",
    "blackAlpha",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "cyan",
    "purple",
    "pink",
    "linkedin",
    "facebook",
    "messenger",
    "whatsapp",
    "twitter",
    "telegram",
  ]

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
        minH="20vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="result"
        flexWrap="wrap"
        p="2rem"
      >
        {elementArray.map(() => (
          <Button
            variant={variant[variantCnt]}
            size={sizes[sizeCnt]}
            isLoading={loading}
            isDisabled={disabled}
            className="result"
            margin={`${marginVal}rem`}
            padding={`${paddingVal}rem`}
            variantColor={color}
          >
            {text}
          </Button>
        ))}
      </Box>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Display controls
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Box>
              <Box>
                <Heading as="h3" size="xs" mb="1rem">
                  Number
                </Heading>
                <DisplayControls
                  controls={{
                    min: 1,
                    max: 10,
                    default: elementArray.length,
                    step: 1,
                  }}
                  callback={value => {
                    let arr = []
                    for (let i = 0; i < value; i++) {
                      arr.push(1)
                    }
                    setArray(arr)
                  }}
                />
                <Heading as="h3" size="xs" mb="1rem">
                  Margin
                </Heading>
                <DisplayControls
                  callback={value => {
                    setMargin(value)
                  }}
                  controls={{ min: 0, max: 2, default: marginVal, step: 0.1 }}
                />
                <Heading as="h3" size="xs" mb="1rem">
                  Padding
                </Heading>
                <DisplayControls
                  callback={value => {
                    setPadding(value)
                  }}
                  controls={{ min: 0, max: 2, default: paddingVal, step: 0.1 }}
                />
                <Heading as="h3" size="xs" mb="1rem">
                  Color
                </Heading>
                <Select
                  placeholder="red"
                  onChange={e => setColor(e.target.value)}
                >
                  {colors.map(c => (
                    <option value={c}>{c}</option>
                  ))}
                </Select>
              </Box>
              <Heading></Heading>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

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
          Import:
        </Heading>
        <Copybox text={imports} />
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
  .result {
    > * {
      /* margin: 2rem; */
    }
  }
`

export default Home
