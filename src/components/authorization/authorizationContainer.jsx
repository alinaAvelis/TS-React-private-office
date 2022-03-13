import React, {useState, useContext, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { AuthorizationForm } from './authorizationForm'; 
import AppServiceContext from '../app-service-context/app-service-context';
import {authorithation, personalsLoaded, personalsRequested, personalsError, setId, setName} from '../../actions';
// import Spinner from '../spinner';
import Error from '../error/error';
import "./authForm.scss";


const AuthorizationFormContainer = ({authorithation, personalsLoaded, personalsError, personalsRequested, setName, personals, auth,  error, setId}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const passwordMessage = document.getElementById('passMess');
  const emailMessage = document.getElementById('emailMess');
  
  const appContext = useContext(AppServiceContext);


  useEffect(() => {
    
    personalsRequested();
        appContext.getPersonals()
        .then(res => {
          personalsLoaded(res);
        })
        .catch(() => {
          personalsError()
        });
  }, [])

  const onChangeEmailHandler = (emailValue) => {
    setEmail(emailValue);

    if(emailMessage) {
      if(emailMessage.innerHTML !== null) {
        emailMessage.innerHTML = " ";
      }
    }
  }

  const onChangePasswordHandler = (passValue) => {
    setPass(passValue);
    if(passwordMessage) {
      if(passwordMessage.innerHTML !== null) {
        passwordMessage.innerHTML = " ";
      }
    }
    
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let authorithationBool;
    const passwordMessage = document.getElementById('passMess');
    const emailMessage = document.getElementById('emailMess');

    function showMessage(elem1, elem2, text1, text2, messBlock) {
      messBlock.innerHTML="";

      if(elem1 !== elem2) {
        messBlock.innerHTML = text1;
      }

      if(elem1 === '') {
        messBlock.innerHTML = text2;
      }
    }

    for ( let elem of personals) {
      authorithationBool = pass === elem.password && email === elem.email;
      showMessage(pass, elem.password, 'Введен неверный пароль. Попробуйте снова.', 'Введите пароль', passwordMessage);
      showMessage(email, elem.email, 'Введен неверный e-mail. Попробуйте снова.', 'Введите e-mail', emailMessage)
        if(authorithationBool) {
          authorithation();
          setId(elem.id);
          setName(elem.name);
          localStorage.setItem('id', elem.id);
          localStorage.authorized = "true";
          break;
        }
    }

  }

  // if(loading) {
  //   return <Spinner />
  // } 

  if(error) {
      return <Error />
  }
    
    return (
      <AuthorizationForm 
          onChangeEmailHandler={onChangeEmailHandler} 
          onChangePasswordHandler={onChangePasswordHandler} 
          handleSubmit={handleSubmit} 
          password={pass}
          email={email}/>
    )
}

AuthorizationFormContainer.propTypes = {
  authorithation: PropTypes.func,
  personalsLoaded: PropTypes.func,
  personalsError: PropTypes.func,
  personalsRequested: PropTypes.func,
  contactsLoaded: PropTypes.func,
  personals: PropTypes.array,
  auth: PropTypes.string,
  error: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    personals: state.personals,
    auth: state.auth,
    error: state.error
  }
}


const mapDispatchToProps = {
  authorithation,
  personalsLoaded,
  personalsRequested,
  personalsError,
  setId,
  setName
}



export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationFormContainer);


