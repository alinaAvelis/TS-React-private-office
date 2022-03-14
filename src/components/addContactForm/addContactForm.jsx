import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import { SubmitButton } from '../submitButton/submitButton';
import InputComponent from '../input/Input';
import { generateId } from '../../utilities';
import {contactsLoaded} from '../../actions';
import Button from '../button/button';
import "./addContacts.scss";
import PropTypes from 'prop-types';

const AddContactForm = ({contacts, contactsLoaded, addContactForm, setAddForm, editOn, photoForEdit, nameForEdit, emailForEdit, telForEdit, editId}) => {
    const [formClass, setFormClass] = useState('visually-hidden');
    const [submitBtnText, setSubmitBtnText] = useState('Добавить контакт');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    useEffect(()=> {
        if(addContactForm) {
            setFormClass('');
        }else{
            setFormClass('visually-hidden');
        }
    }, [addContactForm]);

    useEffect(()=> {
        if(editOn) {
            setPhoto(photoForEdit);
            setName(nameForEdit);
            setEmail(emailForEdit);
            setTel(telForEdit);
            setSubmitBtnText("Внести изменения")
        }
    }, [editOn]);

    const onChangePhotoHandler = (urlValue) => {
        setPhoto(urlValue);
    }

    const onChangeNameHandler = (nameValue) => {
        setName(nameValue);
    }

    const onChangeEmailHandler = (emailValue) => {
        setEmail(emailValue);
    }

    const onChangeTelHandler = (telValue) => {
        setTel(telValue);
    }

    const onClickHundler = () => {
        setAddForm(false);
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
            const contactsArray = [...contacts];
            if(editOn) {
                const index = contactsArray.findIndex(elem => elem.contactId === editId);
                console.log(index);
                contactsArray[index] = newContact;
                contactsLoaded([...contactsArray]);
            } else {
                const newContactsArray = [...contacts, newContact];
                contactsLoaded(newContactsArray);
            }
        }

        setEmail("");
        setTel("");
        setName("");
        setPhoto("");
        setAddForm(false);
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
                <SubmitButton value={submitBtnText} />
                <Button 
                    text="Убрать форму" 
                    classBtn='button'
                    onClickHundler={onClickHundler} />
            </div>
           
       </form>
    )
}

AddContactForm.propTypes = {
    contacts: PropTypes.array,
    contactsLoaded: PropTypes.func,
    addContactForm: PropTypes.bool,
    setAddForm: PropTypes.func,
    editOn: PropTypes.bool,
    photoForEdit: PropTypes.string,
    nameForEdit: PropTypes.string,
    emailForEdit: PropTypes.string,
    telForEdit: PropTypes.string,
    editId: PropTypes.string
  };


const mapStateToProps = (state) => {
    return {
      contacts: state.contacts,
    }
  }

  const mapDispatchToProps = {
    contactsLoaded
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);