
import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';


const theme = extendTheme(withDefaultColorScheme({ colorScheme: "red" }))

const Providers = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}
  
export default Providers