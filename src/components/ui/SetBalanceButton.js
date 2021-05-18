import React, { useState } from 'react'
import { 
    Button, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'
import { useMoralis } from 'react-moralis'
import testRLCAbi from '../../utils/testRLCabi.json'
import BigNumber from 'bignumber.js'

const SetBalanceButton = (props) => {
    const [amount, setAmount] = useState(100)
    const [waiting, setWaiting] = useState(false)

    const { user, web3 } = useMoralis()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChange = (amount) => {
        setAmount(amount)
    }

    const handleSubmit = async () => {
        const contract = new web3.eth.Contract(testRLCAbi, '0x9B0d8B7114231518B885EAd7826e639F86ca135F')
        const formattedAmount = BigNumber(amount).multipliedBy(BigNumber(10).pow(18)).toString(10)
        setWaiting(true)
        const res = await contract.methods.setBalance(user.get('ethAddress'), formattedAmount).send({from: user.get('ethAddress')})
        console.log({res})
        setWaiting(false)
        onClose()
    }

    return (
        <>
        <Button disabled={!(user && web3)} onClick={onOpen} {...props}>Set TestRLC Balance</Button>
        <Modal 
          size="md"
          closeOnOverlayClick={false} 
          closeOnEsc={false} 
          isOpen={isOpen} 
          onClose={onClose}
          >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Set TestRLC Balance</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl id="newBalance">
            <FormLabel>New balance</FormLabel>
                <NumberInput min={0} value={amount} onChange={handleChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            <FormHelperText>This will update your current TestRLC balance in the contract</FormHelperText>
            </FormControl>
            </ModalBody>
  
            <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
                <Button disabled={waiting} onClick={handleSubmit}>{waiting ? 'Waiting for transaction' : 'Save'}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
}

export default SetBalanceButton