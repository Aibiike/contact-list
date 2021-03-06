import React,{useState,useEffect} from 'react';
import ContactsList from "./components/ContactsList";
import Header from "./components/Header";
import axios from "axios";
import AddForm from "./components/AddForm";



function App() {
  const [search,setSearch] = useState('')
  const [contacts,setContacts] = useState([])
  const[iShowForm,setIsShowForm]=useState(false)
    useEffect(()=>{
        axios('https://605c24c76d85de00170d9537.mockapi.io/users')
            .then(({data}) => setContacts(data))
    },[])

    const deleteUser =(id)=>{
      axios.delete(`https://605c24c76d85de00170d9537.mockapi.io/users/${id}`)
          .then(({data})=> {
              setContacts(contacts.filter(el => el.id !== data.id))
          })
    }
    const addUser=(user)=>{
      axios.post('https://605c24c76d85de00170d9537.mockapi.io/users',user)
          .then(({data})=> setContacts([...contacts,data]))
        setIsShowForm(false)
    }
    const upDateUser=(id,name,phone)=>{
      axios.put(`https://605c24c76d85de00170d9537.mockapi.io/users/${id}`,{name,phone})
          .then(({data})=> setContacts(contacts.map(el => el.id === data.id ? data : el)))
    }

  return (
    <div className='w-1/3 mx-auto my-8'>
      <Header setSearch={setSearch} setIsShowForm={setIsShowForm} contacts={contacts}/>
        {iShowForm && <AddForm addUser={addUser} setIsShowForm={setIsShowForm}/>}
      <ContactsList
       upDateUser={upDateUser}
       search={search}
       contacts={contacts}
       onDelete={deleteUser}
      />
    </div>
  );
}

export default App;
