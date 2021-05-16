import React from 'react';
import {
  Box,
  Text,
  Link,
  HStack,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <HStack><ColorModeSwitcher justifySelf="flex-end" /></HStack>
          <VStack spacing={8}>
            <Logo fontSize="100px" color="red.500" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="red.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
  );
}

export default App;
