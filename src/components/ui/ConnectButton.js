import React from 'react'
import { useMoralis } from 'react-moralis'
import { Button } from '@chakra-ui/react'

const ConnectButton = ({children, ...rest}) => {
    const { authenticate, isAuthenticated } = useMoralis()

    return (
        <Button size="sm" rounded="md" {...rest} onClick={authenticate}>
            {isAuthenticated ? 'Disconnect' : 'Connect'}
        </Button>
    )
}

export default ConnectButton