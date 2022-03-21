import React, {useState, useEffect, useContext} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { SubmitButton } from '../submitButton/submitButton';
import InputComponent from '../input/Input';
import { generateId } from '../../utilities';
import {contactsLoaded} from '../../actions';
import Button from '../button/button';
import "./addContacts.scss";
import { deleteScript } from '../../utilities';
import AppServiceContext from '../app-service-context';


const AddContactForm = ({contacts, contactsLoaded, addContactForm, setAddForm, editOn, photoForEdit, nameForEdit, emailForEdit, telForEdit, editId}) => {
    const appContext = useContext(AppServiceContext);
    const [formClass, setFormClass] = useState('visually-hidden');
    const [submitBtnText, setSubmitBtnText] = useState('Добавить контакт');
    const [errorMess, setErrorMess] = useState('');
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
            "name": deleteScript(name),
            "email": deleteScript(email),
            "tel": deleteScript(tel),
            "url": deleteScript(photo),
            "contactId": `${generateId()}`
        }

        if(name || email || tel || photo) {
            setErrorMess('');
            const contactsArray = [...contacts];
            if(editOn) {
                const index = contactsArray.findIndex(elem => elem.contactId === editId);
                contactsArray[index] = {...newContact, "contactId": contactsArray[index].contactId};
                contactsLoaded(contactsArray);

                appContext.putContacts(`${Number(localStorage.getItem('id'))}`, contactsArray)
                .catch(error => {
                    setErrorMess(`Не удалось отправить данные. Ошибка ${error}`);
                });
            } else {
                const newContactsArray = [...contactsArray, newContact];
                appContext.putContacts(`${Number(localStorage.getItem('id'))}`, newContactsArray)
                .catch(error => {
                    setErrorMess(`Не удалось отправить данные. Ошибка ${error}`);
                });
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
       <>
            <p className='red'>{errorMess}</p>
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
       </>
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
      contacts: state.contacts
    }
  }

  const mapDispatchToProps = {
    contactsLoaded
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);