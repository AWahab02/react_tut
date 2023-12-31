import React, { useState } from 'react'
import ItemList from './itemList'

const Content = ({items, handlecheck, handledelete}) => {

    return (
    <>
        
        {items.length?
        (
            <ItemList 
            items={items}
            handlecheck={handlecheck}
            handledelete={handledelete}
            />

        )
         :
         (
            <h3>The list is empty</h3>
         )
        }
       
    </>
  )
}

export default Content