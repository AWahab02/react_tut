import './index.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Content1 from './Content1';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import InputBox from './Challenge';
import Colorbox from './Colorbox';
import apiRequest from './apiRequest';

function App() {

  const API_URL = "http://localhost:3500/items";

  const [newitem, setNewItem] = useState('');
  const [items, setItem] = useState([]);
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        const listItems = await response.json();
        if(!response.ok) throw Error('did not receive the URL');
        console.log(listItems);
        setItem(listItems);
        setFetchError(null);
      }
      catch (err)
      {
        setFetchError(err.message);
      }
      finally
      {
        setIsLoading(false);
      }
    }

    setTimeout(()=> {
      (async () => await fetchItems())();
    }, 2000);

   /*  (async () => await fetchItems())(); */
  }, [])

const addItem= async (item) => {
  const id = items.length? items[items.length-1].id+1: 1;
  const myNewItem = {
    id, checked: false, item
  };

  console.log('Here it is nigga');
  console.log(myNewItem);

  const listitems = [...items, myNewItem];
  setItem(listitems);
  console.log(listitems);
/*   localStorage.setItem('shoppinglist', JSON.stringify(listitems));
 */
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }

  const result = await apiRequest(API_URL, postOptions);
  if(result) setFetchError(result);

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

const [challengeitem, setChallengeItem] = useState('');

const handlecheck = async (id) => {
    const listitems = items.map((item) => item.id === id ? {
        ...item, checked: !item.checked
    }:  item
    ); 
    setItem(listitems);
/*     localStorage.setItem('shoppinglist', JSON.stringify(listitems));
 */
    const myItem = listitems.filter(item => item.id===id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({checked: myItem[0].checked})

    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result); 


}

const handledelete = async (id) =>
{
    const listitems = items.filter((item) => (item.id!==id));
    setItem(listitems);
    localStorage.setItem('shoppinglist', JSON.stringify(listitems));

    const reqUrl = `${API_URL}/${id}`;
    const deleteOptions = {
      method: 'DELETE',
    }

    const result = await apiRequest(reqUrl ,deleteOptions);
    if(result) setFetchError(result);
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

      <main>  
        {isLoading && <p>Loading Items...</p>}
        {fetchError? <p style={{color: 'red'}}>{`Error: ${fetchError}`}</p>:
        <Content 
        handlecheck={handlecheck}
        handledelete={handledelete}
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        />
        }
      </main>

      <Footer 
      length = {items.length}
      />
      {/* 
      <Colorbox 
      challengeitem={challengeitem}
      setChallengeItem={setChallengeItem}
      />

      <InputBox 
      challengeitem={challengeitem}
      setChallengeItem={setChallengeItem}
      /> */}
    </div>
  ); 
}

export default App;
