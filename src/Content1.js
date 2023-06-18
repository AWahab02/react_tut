import React, { useState } from 'react'

const Content1 = () => {

    const [name, setName] = useState('Wahab');
    const [count, setCount] = useState(0);

     const handleClick = (name) =>
    {
        const names = ['Wahab', 'Suhaib', 'Arham'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
    }

    const increment = (count) =>
    {
        setCount(prevcount => prevcount+1);
    }
    const decrement = (count) =>
    {
        setCount(prevcount => prevcount-1);
    }
     
    const eventclick = (e) =>
    {
        console.log(e);
    }
  return (
    <main>
        <p onClick={handleClick}>
            Hello, {name}!
        </p>

        <span><button onClick={decrement}>-</button> <span>{count}</span> <button onClick={increment}>+</button></span>

        <button onClick={() => handleClick('wahab')}>
        Click Me!
        </button>
        
        <button onClick={(e) => eventclick(e.target)}>
        Event
        </button>
    </main>
  )
}

export default Content1