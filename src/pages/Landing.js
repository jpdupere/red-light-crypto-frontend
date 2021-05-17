import React from "react"
import { useMoralis } from 'react-moralis'
import LandingLayout from "../components/layouts/LandingLayout"
import {
    Box,
    Text,
    VStack,
    Code,
    Grid,
  } from '@chakra-ui/react'
import { Logo } from '../Logo'

export default function Landing(props) {
  const { isAuthenticated } = useMoralis()
  
  if (isAuthenticated) {

    return (
      <LandingLayout {...props}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
              <Text>
                This is the home page when the user is <Code fontSize="xl">connected</Code>.
              </Text>
              <Text>
                You have: TestRLC tokens
              </Text>
          </VStack>
          </Grid>
        </Box>
      </LandingLayout>
    )
  }
  return (
    <LandingLayout {...props}>
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
    </LandingLayout>
  )
}