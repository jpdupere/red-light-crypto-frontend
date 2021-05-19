import { Box, Grid, VStack, Text, Code } from "@chakra-ui/layout"
import React from "react"
import LandingLayout from "../components/layouts/LandingLayout"
import useTokenBalance from "../utils/useTokenBalance"

export default function Restricted(props) {
  const testRLCBalance = useTokenBalance()
  
  let content = <Text>Restricted Content. You need a minimum of <Code fontSize="xl">100 TestRLC</Code> tokens to enter.</Text>
  
  if (testRLCBalance.isGreaterThanOrEqualTo(100 * 10 ** 18)) {
      content = <Text>Access granted!</Text>
  }


  return (
    <LandingLayout {...props}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                {content}
            </VStack>
        </Grid>
    </Box>
    </LandingLayout>
  )
}