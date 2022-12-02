import React from 'react'

const Header = ({textInput}) => {
  return (
    <>
    <h2 style={{color: 'violet'}}>{textInput ? textInput : null}</h2>
    </>
  )
}

export default Header