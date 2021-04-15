import React ,{useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const ContactsListItem = ({user,onDelete,upDateUser}) => {
    const initials = user.name.split(' ').map(el => el[0]).join('')
    const [editable,setEditable]=useState(false)
    const [newName,setNewName]= useState(user.name)
    const [newPhone,setNewPhone]= useState(user.phone)

    const saveUser= ()=>{
        upDateUser(user.id,newName,newPhone)
        setEditable(false)
    }
    return (
        <div className="flex items-center hover:bg-blue-50 px-4 py-2" key={user.id}>
            <div className="bg-blue-600 w-16 h-16 rounded-full flex-shrink-0
                flex items-center justify-center text-white font-bold mr-5 ">{initials}
            </div>
            {
                !editable &&  <div>
                    <h4 className='font-bold text-xl'>{user.name}</h4>
                    <p className='text-gray-500'>{user.phone}</p>
                </div>
            }

            {
                editable &&
              <div>
                  <input type="text"
                         className='border-2 w-full mb-3 px-2'
                         placeholder='Enter your name'
                         defaultValue={user.name}
                         onChange={(e)=>setNewName(e.target.value)}
                  />

                  <input type="text"
                         className='border-2 w-full mb-3 px-2'
                         placeholder='Enter your phone'
                         defaultValue={user.phone}
                         onChange={(e)=>setNewPhone(e.target.value)}
                  />
                  <div className='text-right'>
                      <button className='bg-green-300 px-4 py-2 text-xs font-semibold tracking-wider text-green-800 rounded mr-3 '
                      onClick={saveUser}
                      disabled={newName.length === 0 || newPhone.length === 0}
                      >Save</button>
                      <button className='bg-red-100 px-4 py-2 text-xs font-semibold tracking-wider text-red-600 rounded '
                              onClick={()=> setEditable(false) }
                      >Cancel</button>
                  </div>
              </div>
            }

            <FontAwesomeIcon
             icon={faPencilAlt}
             className='ml-auto text-green-200'
             onClick={()=> setEditable(true)}
            />
            <FontAwesomeIcon
             icon={faTrashAlt}
             className='ml-3 text-red-500'
             onClick={()=> onDelete(user.id)}
            />
        </div>
    );
};

export default ContactsListItem;