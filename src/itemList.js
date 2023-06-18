import React from 'react'
import LineItems from './lineItems'

const ItemList = ({items, handlecheck, handledelete}) => {
  return (
    <ul>
    {items.map((item) => (
        <LineItems 
        key = {item.key}
        item= {item}
        handlecheck={handlecheck}
        handledelete={handledelete}
        />
    ))}
</ul>
  )
}

export default ItemList