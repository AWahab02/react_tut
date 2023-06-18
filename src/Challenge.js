import { useState } from 'react';
import React from 'react'

const InputBox = ({challengeitem, setChallengeItem}) => {
  return (
    <main>
        <input 
        className='challenge'
        type='text' 
        placeholder='Add color name'
        required
        autoFocus
        value={challengeitem}
        onChange={(e) => {setChallengeItem(e.target.value)}}
        >
        </input>
    </main>
  )
}

export default InputBox