import React, {useState} from 'react';
import {connect} from 'react-redux';

import { SubmitButton } from '../submitButton/submitButton';
import InputComponent from '../input/Input';
import { generateId } from '../../utilities';
import {contactsLoaded} from '../../actions';

type AddContactFormProps = {
    contacts: string[];
    contactsLoaded: Function
  };

const AddContactForm = ({contacts, contactsLoaded} : AddContactFormProps) => {
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const onChangePhotoHandler = (urlValue: string) => {
        setPhoto(urlValue);
    }

    const onChangeNameHandler = (nameValue: string) => {
        setName(nameValue);
    }

    const onChangeEmailHandler = (emailValue: string) => {
        setEmail(emailValue);
    }

    const onChangeTelHandler = (telValue: string) => {
        setTel(telValue);
    }

    const handleSubmit = () => {
        
        const newContact = {
            "name": name,
            "email": email,
            "tel": tel,
            "url": photo,
            "contactId": `${generateId()}`
        }

        const newContactsArray = [...contacts, newContact];
        contactsLoaded(newContactsArray);

        setEmail("");
        setTel("");
        setName("");
        setPhoto("");

    }

    return (
       <form onSubmit={(event) => {
            event.preventDefault();
           handleSubmit();
           }}>
           <InputComponent 
                type="text" 
                placeholder="Укажите ссылку на фотографию" 
                inputValue={photo}  
                inputId="photo" 
                name="photo" 
                labelText="Фотография:"
                onChangeHandler={onChangePhotoHandler}/>
           <InputComponent 
                type="text" 
                placeholder="Введите имя контакта" 
                inputValue={name}  
                inputId="name" 
                name="name" 
                labelText="Имя:"
                onChangeHandler={onChangeNameHandler}/>
            <InputComponent 
                type="email" 
                placeholder="Введите e-mail контакта" 
                inputValue={email}  
                inputId="email" 
                name="email" 
                labelText="E-mail:"
                onChangeHandler={onChangeEmailHandler}/>
            <InputComponent 
                type="tel" 
                placeholder="Введите телефон контакта" 
                inputValue={tel}  
                inputId="tel" 
                name="tel" 
                labelText="Номер телефона:"
                onChangeHandler={onChangeTelHandler}/>
            <SubmitButton value="Добавить" />
       </form>
    )
}

interface RootState {
    contacts: string[]
  }

const mapStateToProps = (state: RootState) => {
    return {
      contacts: state.contacts,
    }
  }

  const mapDispatchToProps = {
    contactsLoaded
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);