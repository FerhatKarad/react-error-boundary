import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import ContactsJson from '../contacts.json'
let maxContacts = 7;


export default function () {
    const [contacts, setContacts] = useState(ContactsJson.slice(0, 1))
    const handleError = useErrorHandler()

    const addContact = () => {
        try {
            if (contacts === maxContacts) {
                throw new Error('')
            } else {
                const newContact = ContactsJson[Math.floor(Math.random() * ContactsJson.length)]
                const isIncluded = contacts.find(contact => contact.name === newContact.name)
                if (!isIncluded) setContacts([newContact, ...contacts])
                else addContact();
            }
        } catch (e) {
            handleError(e)
        }
    }
    return (
        <div>
            <h1> Contact List</h1>
            <p> The maximal amount of contacts are 7 </p>
            <button onClick={addContact}>Add Contacts by Clicking Button</button>
            {contacts.map(contact => (
                <div key={contact.id}><h2>{contact.name}</h2></div>
            ))}
        </div>
    )
}

