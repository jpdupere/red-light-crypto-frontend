import React from 'react'
import { Button } from '@chakra-ui/react'
import { useMoralis } from 'react-moralis'

const ConnectButton = ({children, ...rest}) => {
    const { authenticate, isAuthenticated, isAuthenticating, isLoggingOut, user, logout } = useMoralis();

    return (
        <Button size="sm" rounded="md" {...rest} disabled={isAuthenticating || isLoggingOut ? true : false } onClick={isAuthenticated ? logout : authenticate}>
            {isAuthenticated ? 'Disconnect' : 'Connect'}
        </Button>
    )
}

export default ConnectButton