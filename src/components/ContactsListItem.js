import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ContactsListItem = ({user,onDelete}) => {
    const initials = user.name.split(' ').map(el => el[0]).join('')
    return (
        <div className="flex items-center hover:bg-blue-50 px-4 py-2" key={user.id}>
            <div className="bg-blue-600 w-16 h-16 rounded-full
                flex items-center justify-center text-white font-bold mr-5 ">{initials}
            </div>
            <div>
                <h4 className='font-bold text-xl'>{user.name}</h4>
                <p className='text-gray-500'>{user.phone}</p>
            </div>
            <FontAwesomeIcon
             icon={faTrashAlt}
             className='ml-auto text-red-500'
             onClick={()=> onDelete(user.id)}
            />
        </div>
    );
};

export default ContactsListItem;