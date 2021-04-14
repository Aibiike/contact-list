import React from 'react';
import ContactsListItem from "./ContactsListItem";


const ContactsList = ({search, contacts,onDelete}) => {

    const filteredSearch = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className=" shadow overflow-y-scroll h-96">
            {
                filteredSearch.map(user => <ContactsListItem user={user} key={user.id}
                 onDelete={onDelete}
                />)}
        </div>
    );
};

export default ContactsList;
