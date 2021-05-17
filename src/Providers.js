
import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';


const theme = extendTheme(withDefaultColorScheme({ colorScheme: "red" }))
const appId = "B9q6MeP8mhSIxHY2BkUy19FKFTEb49XhucTMNul8"
const serverUrl = "https://i7a6t8kzhrxk.moralis.io:2053/server"

const Providers = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            <MoralisProvider 
                appId={appId}
                serverUrl={serverUrl}>
                {children}
            </MoralisProvider>
        </ChakraProvider>
    )
}
  
export default Providers