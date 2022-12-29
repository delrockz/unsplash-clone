import React from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

const ImageModal = ({ closeImageModal, showImageModal }: { closeImageModal: () => void; showImageModal: boolean }) => {
  return (
    <Modal onClose={closeImageModal} size={'md'} isOpen={showImageModal} closeOnOverlayClick={false}>
      <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
      <ModalContent>
        <ModalHeader>User name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className='text-left'>
            <p className='font-semibold my-1 text-left'>Notes:</p>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImageModal
