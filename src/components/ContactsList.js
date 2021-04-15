import React from 'react';
import ContactsListItem from "./ContactsListItem";


const ContactsList = ({search, contacts,onDelete,upDateUser}) => {

    const filteredSearch = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className=" shadow overflow-y-scroll h-96">
            {contacts.length=== 0 && <h2 className='font-bold text-4xl text-gray-300 text-center mt-32'>Список контактов пуст</h2>}
            {
                filteredSearch.map(user => <ContactsListItem user={user} key={user.id} upDateUser={upDateUser}
                 onDelete={onDelete}
                />)}
        </div>
    );
};

export default ContactsList;
