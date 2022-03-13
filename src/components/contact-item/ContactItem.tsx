import React from 'react';
import {Link} from "react-router-dom";
import "./contactItem.scss";

type ContactItemProps = {
    url: string;
    name: string;
    email: string;
    tel: string;
  };

const ContactItem = ({url, name, email, tel}: ContactItemProps) => {
    return (
        <div className='contact__item'>
            <div className="contact__img_container">
                <img  className="img" src={url} alt="фотография контакта"/>
            </div>
               
            <div className='contact__text'>
                <p><span className='strongText'>Имя:</span> {name}</p>
                <p><span className='strongText'>E-mail:</span> {email}</p>
                <p><span className='strongText'>Телефон:</span> {tel}</p>
            </div>
           
        </div>
    )
}

export default ContactItem;