import React, { useState, useEffect } from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"

const UnsupportedChainAlert = () => {
    const [chainId, setChainId] = useState(null)
    const metamask = window.ethereum
    
    useEffect(() => {
        const requestChainId = async () => {
            const chainId = await metamask.request({ method: 'eth_chainId' })
            setChainId(chainId)
        }

        if (metamask) {
            requestChainId()
            setChainId()
            let chainSub = metamask.on('chainChanged', () => {
                // Handle the new chain.
                // Correctly handling chain changes can be complicated.
                // We recommend reloading the page unless you have good reason not to.
                window.location.reload();
            });
            return () => chainSub.removeAllListeners('chainChanged')
        }
    }, [metamask])

    let content = null
    if (chainId && chainId !== '0x61')
    content = (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Unsupported Chain!</AlertTitle>
            <AlertDescription>Please use Binance Smart Chain - Testnet with Metamask</AlertDescription>
        </Alert>
    )

    return content
}

export default UnsupportedChainAlert