import React from "react"
import { useMoralis } from "react-moralis"
import {
    Box,
    Text,
    VStack,
    Code,
    Grid,
  } from '@chakra-ui/react'
import useTokenBalance from "../../utils/useTokenBalance"
import BigNumber from 'bignumber.js'

export default function HomeConnected(props) {
    const { user } = useMoralis()
    const balance = useTokenBalance()
    const balanceString = BigNumber(balance).dividedBy(BigNumber(10).pow(18)).toString()

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                This is the home page when the user is <Code fontSize="xl">connected</Code>.
                </Text>
                <Text>
                Your wallet address: <Code fontSize="xl">{user.get('ethAddress')}</Code>
                </Text>
                <Text>
                You have: <Code fontSize="xl">{balanceString}</Code> TestRLC tokens
                </Text>
            </VStack>
            </Grid>
        </Box>
    )
}