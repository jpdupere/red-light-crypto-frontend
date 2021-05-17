
import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3 } from 'web3'
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'


const theme = extendTheme(withDefaultColorScheme({ colorScheme: "red" }))
function getLibrary(provider, connector) {
    return new Web3(window.ethereum || "ws://localhost:8545") // this will vary according to whether you use e.g. ethers or web3.js
}

const Providers = ({ children }) => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ChakraProvider theme={theme}>
                    {children}
            </ChakraProvider>
        </Web3ReactProvider>
    )
}
  
export default Providers