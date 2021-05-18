import React from "react"
import {
    Box,
    Text,
    VStack,
    Code,
    Grid,
  } from '@chakra-ui/react'
import { Logo } from '../../Logo'

export default function HomeDisconnected(props) {
return (
<Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
              <Logo fontSize="100px" color="red.500" pointerEvents="none" />
              <Text>
                This is the landing page when the user is <Code fontSize="xl">disconnected</Code>.
              </Text>
              <Text>
                Please connect with <Code fontSize="xl">Metamask</Code> on <Code fontSize="xl">Binance Smart Chain - Testnet</Code> to access restricted content.
              </Text>
          </VStack>
          </Grid>
      </Box>
)
}