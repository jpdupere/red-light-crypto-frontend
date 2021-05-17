import React from 'react'
import { Button } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'

const ConnectButton = ({children, ...rest}) => {
    const { activate, deactivate } = useWeb3React()

    let address = null;
    const login = () => {
        activate()
    }
    return (
        <Button size="sm" rounded="md" {...rest} onClick={login}>
            {address ? 'Disconnect' : 'Connect'}
        </Button>
    )
}

export default ConnectButton