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
    // const { password, email} = props;
    // const newData = props.data;

    // useEffect(() => {
    //     const passwordMessage = document.getElementById('passMess');
    //     const emailMessage = document.getElementById('emailMess');
  
    //     newData.forEach(elem => {
    //       function hideMessage(elem1, elem2, messBlock) {
    //         if(elem1 === elem2) {
    //           messBlock.innerHTML = '';
    //         }
    //       }
  
    //       hideMessage(password, elem.password, passwordMessage);
    //       hideMessage(email, elem.email, emailMessage);
   
    //     });
    // }, [password, email, newData])

    return (
        <>
            <form className="auth__form" onSubmit={() => {handleSubmit()}}>
                <Input type="email" placeholder="Введите e-mail" inputValue={email}  inputId="email" name="email" onChangeHandler={onChangeEmailHandler}/>
                <p className="form__message" id="emailMess" ></p>
                <Input type="password" placeholder="Введите пароль" inputValue={password}  inputId="password" name="password" onChangeHandler={onChangePasswordHandler}/>
                <p className="form__message" id="passMess"></p>

                <SubmitButton value="Войти" />
                            
            </form>        
        </>
        
    )
}