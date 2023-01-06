import React from 'react'
interface HeaderProps {
    title: string
}
const Header = ({title}: HeaderProps) => {
  return (
      <div className='text-[#141C1F[ text-4xl'>{title}</div>
  )
}

export default Header
