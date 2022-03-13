import React, {useState} from 'react';
import { SubmitButton } from '../submitButton/submitButton';
import InputComponent from '../input/Input';

type AddContactFormProps = {
 
  };

const AddContactForm = ({} : AddContactFormProps) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    const onChangeNameHandler = (nameValue: string) => {
        setEmail(nameValue);
    }

    return (
       <form>
           <InputComponent 
                type="text" 
                placeholder="Введите имя контакта" 
                inputValue={name}  
                inputId="email" 
                name="email" 
                labelText="Имя:"
                onChangeHandler={onChangeNameHandler}/>
            <InputComponent 
                type="email" 
                placeholder="Введите e-mail контакта" 
                inputValue={name}  
                inputId="email" 
                name="email" 
                labelText="E-mail:"
                onChangeHandler={onChangeNameHandler}/>
            <InputComponent 
                type="tel" 
                placeholder="Введите имя контакта" 
                inputValue={name}  
                inputId="email" 
                name="email" 
                labelText="Номер телефона:"
                onChangeHandler={onChangeNameHandler}/>
       </form>
    )
}

export default AddContactForm;