import React from "react"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { ColorModeSwitcher } from "../ui/ColorModeSwitcher"
import ConnectButton from '../ui/ConnectButton'

const MenuItem = ({ children, isLast, to, ...rest }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        {to ? (<Link to={to}>{children}</Link>) : children}
      </Text>
    )
}

const Header = (props) => {
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)

    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        {...props}
      >
        <Flex align="center">
            <Text
                w="150px"
                fontSize="xl"
                color="red.500"
                >
            Red Light Crypto
            </Text>
        </Flex>
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            {show ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
        <Box display={{ base: show ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}>
            <Flex
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/restricted">NFT</MenuItem>
                <MenuItem>
                    <ConnectButton />
                </MenuItem>
                <MenuItem isLast><ColorModeSwitcher /></MenuItem>
            </Flex>
        </Box>
      </Flex>
    )
  }

  export default Header