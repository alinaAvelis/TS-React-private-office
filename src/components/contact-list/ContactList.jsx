import React, {useEffect, useContext, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import AppServiceContext from '../app-service-context/app-service-context';
import {personalsLoaded, personalsRequested, personalsError, contactsLoaded} from '../../actions';
import ContactItem from '../contact-item/ContactItem';
import "./contactList.scss";
import Spinner from '../spinner';
import Error from '../error/error';
import Button from '../button/button';
import AddContactForm from '../addContactForm/addContactForm';
// const axios = require('axios');


const ContactList = ({personalsError, personalsRequested, contactsLoaded, contacts, id, error, loading, term, filtresContacts}) => {
  const [addform, setAddForm] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  const appContext = useContext(AppServiceContext);

  useEffect(() => {
    personalsRequested();
        appContext.getContacts()
        .then(res => {
          let newId;
          
          if(localStorage.getItem('id')) {
            newId = localStorage.getItem('id');
          } else {
            newId = id;
          }

          for(let item of res) {
            if(String(item.id) === newId) {
              
              contactsLoaded(item.contacts);
              break;
            }
          }         
        })
        .catch(() => {
          personalsError()
        });
  }, []);

  const onClickHundler = () => {
    setAddForm(true);
  }

  const deleteContact = (id) => {
    setErrorMess("");
    const newContactsArray = [...contacts];
    const index = newContactsArray.findIndex(elem => elem.contactId === id);
    const before = newContactsArray.slice(0, index);
    const after = newContactsArray.slice(index + 1);
 
    const newArr = [...before, ...after];
    contactsLoaded(newArr);
    appContext.putContacts(`${Number(localStorage.getItem('id'))}`, newArr)
   .catch(error => {
        setErrorMess(`Не удалось удалить элемент. Ошибка ${error}`);
    });
  }

  if(loading) {
    return <Spinner />
  } 

  if(error) {
    return <Error />
}

    return (
        <>
            <Button 
              text="Добавить контакт" 
              classBtn='button  button--right'
              onClickHundler={onClickHundler} />

            <AddContactForm  
            addContactForm={addform}
            setAddForm={setAddForm}/>


           <ul className='contact__list  list_list_style_type_none'>
              { filtresContacts.map(item => {
                    return <li key={item.contactId}>
                      <ContactItem 
                        idItem ={item.contactId}
                        url={item.url}
                        name={item.name}
                        email={item.email}
                        tel={item.tel}
                        deleteContact={deleteContact}
                        errorMess={errorMess}
                      />
                  </li>})}
           </ul>
        </>
    )
}

ContactList.propTypes = {
  personalsError: PropTypes.func,
  personalsRequested: PropTypes.func,
  contactsLoaded: PropTypes.func,
  contacts: PropTypes.array,
  auth: PropTypes.bool,
  error: PropTypes.bool,
  term: PropTypes.string,
  filtresContacts: PropTypes.array
};


const mapStateToProps = (state) => {
    return {
      id: state.id,
      contacts: state.contacts,
      loading: state.loading,
      error: state.error,
      term: state.term,
      filtresContacts: state.filtresContacts
    }
  }
  
  
  const mapDispatchToProps = {
    personalsLoaded,
    personalsRequested,
    personalsError,
    contactsLoaded
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);