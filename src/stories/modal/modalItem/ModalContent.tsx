import React from 'react'

type modalProps = {
  children: React.ReactNode
}

const ModalContent = ({ children }: modalProps) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default ModalContent