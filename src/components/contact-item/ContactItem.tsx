import React, {useState} from 'react';
import "./contactItem.scss";
import Button from '../button/button';
import AddContactForm from "../addContactForm/addContactForm";
type ContactItemProps = {
    url: string;
    name: string;
    email: string;
    tel: string;
    idItem: string;
    deleteContact: Function;

  };

const ContactItem = ({url, name, email, tel, idItem, deleteContact}: ContactItemProps) => {
    const [edit, setEdit] = useState(false);

    const getNewTel = (phone: string) => {
        let newTelArray =  Array.from(phone);
        if(newTelArray[0] == '8') {
            newTelArray[0] = "+7"; 
        }

        const telString = newTelArray.toString();
        const newTel = telString.replace(/,/g, "");
        return newTel;
    }

    const onClickDeleteHundler = () => {
        deleteContact(idItem);
    }

    const onClickEditHundler = () => {
        setEdit(true);
    }

    if(edit) {
        return (
            <div className='contact__item'>
            <AddContactForm 
                addContactForm={edit} 
                setAddForm={setEdit}
                editOn={edit}
                photoForEdit={url} 
                nameForEdit={name} 
                emailForEdit={email} 
                telForEdit={tel}
                editId={idItem}

            />

            <p className="contact__btns_container">
                <Button 
                    text="Удалить" 
                    classBtn='button  button--left'
                    onClickHundler={onClickDeleteHundler} 
                />
            </p>
           
        </div>
        )
    }
    
    return (
        <div className='contact__item'>
            <div className="contacts__info">
                <div className="contact__img_container">
                    <img  className="img" src={url} alt="фотография контакта"/>
                </div>
                
                <div className='contact__text'>
                    <p><span className='strongText'>Имя:</span>
                        {name}
                    </p>

                    <p><span className='strongText'>E-mail:</span>
                    <a className="link" href={`mailto:${email}`}>
                        {email}
                    </a>
                    </p>

                    <p><span className='strongText'>Телефон:</span> 
                    <a className="link" href={`tel:${getNewTel(tel)}`}>
                        {tel}
                    </a>

                    </p>
                </div>
            </div>

            <p className="contact__btns_container">
                <Button 
                    text="Удалить" 
                    classBtn='button  button--left'
                    onClickHundler={onClickDeleteHundler} 
                />

                <Button 
                    text="Редактировать" 
                    classBtn='button  button--left'
                    onClickHundler={onClickEditHundler} 
                />
            </p>
           
        </div>
    )
}

export default ContactItem;