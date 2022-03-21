import React from 'react';

import ContactList from '../components/contact-list/ContactList';
import SearchPanel from '../components/searchPanel/searchPanel';

const Contacts = () => {
    return (
        <>
            <section className='section'>
                <SearchPanel />
            </section>
    
            <section  className='section'> 
                <h1 className='title'>Контакты</h1>
                
                <ContactList />
    
            </section>
        </>
    )
}

export default Contacts;