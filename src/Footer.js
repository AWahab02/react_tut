import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer>
        {length===1? 
          <p>{length} List item</p>
          :
          <p>{length} List items</p>
        }
    </footer>
  )
}

export default Footer