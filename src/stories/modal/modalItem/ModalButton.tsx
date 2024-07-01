import React from 'react'

type modalProps = {
  children: React.ReactNode
}

const ModalButton = ({ children }: modalProps) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default ModalButton