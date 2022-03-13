import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import { SubmitButton } from '../submitButton/submitButton';
import InputComponent from '../input/Input';
import { generateId } from '../../utilities';
import {contactsLoaded} from '../../actions';
import Button from '../button/button';
import "./addContacts.scss";

type AddContactFormProps = {
    contacts: string[];
    contactsLoaded: Function;
    addContactForm: boolean;
    setAddForm: Function;
  };

const AddContactForm = ({contacts, contactsLoaded, addContactForm, setAddForm} : AddContactFormProps) => {
    const [formClass, setFormClass] = useState('hide');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    useEffect(()=> {
        if(addContactForm) {
            setFormClass('');
        }else{
            setFormClass('hide');
        }
    }, [addContactForm]);

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

    const onClickHundler = () => {
        setAddForm(false)
    }

    const handleSubmit = () => {

        if(!photo) {
            setPhoto("https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg")
        }
        
        const newContact = {
            "name": name,
            "email": email,
            "tel": tel,
            "url": photo,
            "contactId": `${generateId()}`
        }

        if(name || email || tel || photo) {
            const newContactsArray = [...contacts, newContact];
            contactsLoaded(newContactsArray);
        }

        setEmail("");
        setTel("");
        setName("");
        setPhoto("");

    }


    return (
       <form className={formClass} onSubmit={(event) => {
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
            <div className="addContact__btns">
                <SubmitButton value="Добавить контакт" />
                <Button 
                    text="Убрать форму" 
                    classBtn='button'
                    onClickHundler={onClickHundler} />
            </div>
           
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