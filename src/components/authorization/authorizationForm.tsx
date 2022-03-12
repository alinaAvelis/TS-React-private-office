import React, {useEffect} from 'react';

import { SubmitButton } from '../submitButton/submitButton';
import Input from '../input/Input';


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
            <form className="auth__form" onSubmit={(event) => {handleSubmit(event)}}>
                <Input type="email" placeholder="Введите e-mail" inputValue={email}  inputId="email" name="email" onChangeHandler={onChangeEmailHandler}/>
                <p className="form__message" id="emailMess" ></p>
                <Input type="password" placeholder="Введите пароль" inputValue={password}  inputId="password" name="password" onChangeHandler={onChangePasswordHandler}/>
                <p className="form__message" id="passMess"></p>

                <SubmitButton value="Войти" />
                            
            </form>        
        </>
        
    )
}