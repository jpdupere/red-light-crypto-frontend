
import React from 'react'
import { Web3Provider } from './utils/web3Provider'
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'


const theme = extendTheme(withDefaultColorScheme({ colorScheme: "red" }))

const Providers = ({ children }) => {
    return (
        <Web3Provider>
            <ChakraProvider theme={theme}>
                    {children}
            </ChakraProvider>
        </Web3Provider>
    )
}
  
export default Providers