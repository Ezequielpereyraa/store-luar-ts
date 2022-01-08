import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type WelcomModalProps = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const WelcomModal = ({ setIsOpen, isOpen }: WelcomModalProps) => (
  <Modal isCentered={true} size='xl' isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <ModalOverlay />
    <ModalContent h='270px' w='90%'>
      <ModalCloseButton />
      <ModalBody textColor='brand.primaryDark' fontWeight='black' textAlign='left' m={[9, 7]}>
        <Text fontSize='2xl'>
          No necesitas estar completa para brillar ✨
        </Text>
        <Text textColor='brand.tertiary' fontSize='md' mt={10} fontWeight='bold'>
            Hola! Somos Luar Lingerie
        </Text>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export default WelcomModal
