import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newitem, handlesubmit, setNewItem}) => {
    const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <input
            autoFocus
            ref={inputRef}
            required
            id='addItem'
            placeholder='Add Item'
            type='text'
            value={newitem}
            onChange={(e)=>setNewItem(e.target.value)}
            >
        </input>
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >

            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem