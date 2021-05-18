import React from 'react'
import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Link
} from '@chakra-ui/react'

const AgeVerifModal = () => {

    // localStorage ageVerif is a timestamp of the last time the age was checked
    const verified = localStorage.getItem('ageVerif') > Date.now() - 1000 * 60 * 60 * 24 * 30

    const { isOpen, onClose } = useDisclosure({defaultIsOpen: !verified})

    const verify = (onClose) => {
      localStorage.setItem('ageVerif', Date.now())
      onClose()
    }

    return (
        <Modal 
          size="2xl"
          closeOnOverlayClick={false} 
          closeOnEsc={false} 
          isOpen={isOpen} 
          onClose={onClose}
          >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Restricted Access</ModalHeader>
            <ModalBody>
              This website is restricted to 18 years old +.
            </ModalBody>
  
            <ModalFooter>
              <Link mr={3} href="https://www.disney.com">I'm under 18</Link>
              <Button onClick={() => verify(onClose)}>
                I'm 18+
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }

export default AgeVerifModal;