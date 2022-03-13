import React, {useEffect} from 'react';

import { SubmitButton } from '../submitButton/submitButton';
import InputComponent from '../input/Input';


type AuthorizationFormProps = {
  onChangeEmailHandler: Function;
  onChangePasswordHandler: Function;
  handleSubmit: Function;
  password: string;
  email: string;
};

export const AuthorizationForm = ({onChangeEmailHandler, onChangePasswordHandler, handleSubmit, password, email}:AuthorizationFormProps) => {


    return (
        <>
            <form className='auth_form' onSubmit={(event) => {handleSubmit(event)}}>
                <InputComponent 
                    type="email" 
                    placeholder="Введите e-mail" 
                    inputValue={email}  
                    inputId="email" 
                    name="email" 
                    labelText="E-mail"
                    onChangeHandler={onChangeEmailHandler}/>
                <p className="form__message" id="emailMess" ></p>
                <InputComponent 
                    type="password" 
                    placeholder="Введите пароль" 
                    inputValue={password}  
                    inputId="password" 
                    name="password" 
                    labelText="Пароль"
                    onChangeHandler={onChangePasswordHandler}/>
                <p className="form__message" id="passMess"></p>

                <SubmitButton value="Войти" />
                            
            </form>        
        </>
        
    )
}