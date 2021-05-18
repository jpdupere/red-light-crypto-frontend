import React from "react"
import { useMoralis } from "react-moralis"
import {
    Box,
    Text,
    VStack,
    Code,
    Grid,
  } from '@chakra-ui/react'

export default function HomeConnected(props) {
  const { isAuthenticated } = useMoralis();
  
  if (isAuthenticated) {

    return (
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
    )
  }
}