'use client'
import React from 'react'
import Modal from './Modal'
import useRentModal from '@/app/Hooks/useRentModal'

const RentModal = () => {
    const rentModal = useRentModal();
  return (
    <Modal
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={rentModal.onClose}
    actionLabel='Submit'
    title='Airbnb your home'

    />
  )
}

export default RentModal