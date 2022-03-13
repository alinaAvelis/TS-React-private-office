import React, {useEffect} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import InputComponent from '../input/Input';
import {setTerm, setFiltredContacts, contactsLoaded} from '../../actions';


const SearchPaner = ({term, setTerm, setFiltredContacts, contactsLoaded, contacts, filtresContacts}) => {

    const searchContact = (items, termValue) => {
        if(termValue.length === 0) {
          return items
        }
    
        return items.filter((item) => {
          return item.name.toLowerCase().includes(termValue.toLowerCase())
        })
      }

      useEffect(() => {
        if(contacts) {
          setFiltredContacts(contacts);
        }
      }, [contacts])
    
      useEffect(() => {
        console.log(term)
        if(!term || term === "" || term.length === 0) {
          setFiltredContacts(contacts); 
        } else {
          setFiltredContacts(searchContact(contacts, term))
        }
      }, [term])
    
    const onSearchHundler = (searchValue) => {
        setTerm(searchValue)
    };
    return (
        <>
          <InputComponent 
                type="search" 
                placeholder="Поиск...	&#128269;" 
                inputValue={term}  
                inputId="search" 
                name="search" 
                labelText=""
                onChangeHandler={onSearchHundler}
            />
        </>
    )
}

SearchPaner.propTypes = {
    term: PropTypes.string,
    setTerm:PropTypes.func,
    setFiltredContacts: PropTypes.func,
    contactsLoaded: PropTypes.func,
    contacts: PropTypes.array,
    filtresContacts: PropTypes.array
};


const mapStateToProps = (state) => {
    return {
      term: state.term,
      contacts: state.contacts, 
      filtresContacts: state.filtresContacts
    }
  }
  
  
  const mapDispatchToProps = {
    setTerm,
    setFiltredContacts,
    contactsLoaded
  }

export default connect(mapStateToProps, mapDispatchToProps)(SearchPaner);