
import React from 'react'
import { MoralisProvider } from "react-moralis";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'


const theme = extendTheme({config: {
    initialColorMode: "dark",
    useSystemColorMode: false, 
}}, withDefaultColorScheme({ colorScheme: "red" }))
const appId = "B9q6MeP8mhSIxHY2BkUy19FKFTEb49XhucTMNul8";
const serverUrl = "https://i7a6t8kzhrxk.moralis.io:2053/server";

const Providers = ({ children }) => {
    return (
        <MoralisProvider appId={appId} serverUrl={serverUrl}>
            <ChakraProvider theme={theme}>
                    {children}
            </ChakraProvider>
        </MoralisProvider>
    )
}
  
export default Providers