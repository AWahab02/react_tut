import './index.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Content1 from './Content1';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {

  const [newitem, setNewItem] = useState('');
  const [items, setItem] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [search, setSearch] = useState('');

const addItem= (item) => {
  const id = items[items.length-1].id+1;
  const myNewItem = {
    id, checked: false, item
  }
  const listitems = [...items, myNewItem];
  setItem(listitems);
  localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}

const handlesubmit = (e) => {
  e.preventDefault();
  if(!newitem)
  {
    return;
  }
  else
  {
    console.log(newitem);
  }
  addItem(newitem);
  setNewItem('');
}


const handlecheck = (id) => {
    const listitems = items.map((item) => item.id === id ? {
        ...item, checked: !item.checked
    }:  item
    ); 
    setItem(listitems);
    localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}

const handledelete = (id) =>
{
    const listitems = items.filter((item) => (item.id!==id));
    setItem(listitems);
    localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}

  const name = "Wahab";
  const handleNameChange = () =>
  {
    const names = ['Wahab', 'Arham', "Suhaib"];
    const number = Math.floor(Math.random()*3);
    return names[number];
  }
  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem 
      newitem = {newitem}
      handlesubmit={handlesubmit}
      setNewItem={setNewItem}
      />
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <Content 
      handlecheck={handlecheck}
      handledelete={handledelete}
      items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      />
      <Footer 
      length = {items.length}
      />
    </div>
  ); 
}

export default App;
