import React from 'react'
import { useState } from 'react'
import { FaBox } from 'react-icons/fa'

const Colorbox = ({challengeitem, setChallengeItem}) => {

const red = 'red';
  return (
    <div className='Colorbox'
    style={{backgroundColor: challengeitem}}
    >
        <main className='colorboxtext'>
            {(challengeitem)? challengeitem : 'Empty Value'}
        </main>
    </div>
  )
}

export default Colorbox