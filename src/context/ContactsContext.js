import React, {useContext, useState, useEffect, createContext} from 'react';
import { createContactRealm, readAllContacts, updateContactRealm, deleteContactRealm, openRealm } from '../db/realm';

export const ContactsContext = createContext();

export const ContactsProvider = ({children}) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() =>{
        //Load contacts from database and set them using set Contacts
        const initRealm= async () => {
            await openRealm();
            const allContacts = readAllContacts();
            setContacts(allContacts);
        };
        initRealm();
    },[]);

    const addContact = contact => {
        // Create contact in the database.
        const newId = createContactRealm(contact);
        setContacts(prev => [...prev, {...contact, id: newId, _id: newId}]);
    };

    // const getContacts = async () => {
    //     const allContacts = []; // Read contacts from the database.
    //     setContacts(allContacts);
    // };

    // const editContact = async (id, newData) => {
    //     // Update contact in the database.
    //     updateContactRealm(id, newData);
    //     setContacts(prev => prev.map(c => (c.id === id ? {...c, ...newData} : c)));
    // };

    const editContact = (id, newData) => {
        // Update contact in the database.
        updateContactRealm(id, newData);
        setContacts(prev => prev.map(c => (c.id === id ? {...c, ...newData} : c)));
    };

    const removeContact = id => {
        // Delete contact from the database.
        deleteContactRealm(id);
        setContacts(prev => prev.filter(c => c.id !== id));
    };

    // const removeContact = async id => {
    //     // Delete contact from the database.
    //     setContacts(prev => prev.filter(c => c.id !== id));
    // };

    const value = {contacts, setContacts, addContact, editContact, removeContact};

    return (
        <ContactsContext.Provider value={value}>
            {children}
        </ContactsContext.Provider>
    );
};
export const useContactsContext = () => useContext(ContactsContext);