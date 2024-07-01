import React from 'react'

type modalProps = {
  children: React.ReactNode
}

const ModalTitle = ({ children }: modalProps) => {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default ModalTitle