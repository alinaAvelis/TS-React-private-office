import React, {useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import AppServiceContext from '../app-service-context/app-service-context';
import {personalsLoaded, personalsRequested, personalsError, contactsLoaded} from '../../actions';
import ContactItem from '../contact-item/ContactItem';
import "./contactList.scss";
import Spinner from '../spinner';
import Error from '../error/error';


const ContactList = ({personalsError, personalsRequested, contactsLoaded, contacts, id, error, loading}) => {
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
            if(item.personalId === newId) {
              contactsLoaded(item.contacts);
            }
          }
          
          
        })
        .catch(() => {
          personalsError()
        });
  }, [])

    
  if(loading) {
    return <Spinner />
  } 

  if(error) {
    return <Error />
}

    return (
        <>
           <ul className='contact__list  list_list_style_type_none'>
              { contacts.map(item => {
                    return <li key={item.contactId}>
                    <ContactItem 
                      url={item.url}
                      name={item.name}
                      email={item.email}
                      tel={item.tel}
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
  error: PropTypes.bool
};


const mapStateToProps = (state) => {
    return {
      id: state.id,
      contacts: state.contacts,
      loading: state.loading,
      error: state.error
    }
  }
  
  
  const mapDispatchToProps = {
    personalsLoaded,
    personalsRequested,
    personalsError,
    contactsLoaded
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);