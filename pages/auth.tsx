import React from 'react';
import AuthorizationFormContainer from '../components/authorization/authorizationContainer';

const Auth = () => {
    return (
        <section  className='section'> 
            <h1 className='title'>Авторизация</h1>
            
            <AuthorizationFormContainer />

        </section>
    )
}

export default Auth;