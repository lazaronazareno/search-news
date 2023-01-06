import React from 'react'

const Header = ({ title }) => {
  return (
    <nav className='container-fluid d-flex justify-content-center'>
      <span
        style={{ fontSize: '4rem', fontWeight: 800 }}
      >{title}
      </span>
    </nav>
  )
}

export default Header
