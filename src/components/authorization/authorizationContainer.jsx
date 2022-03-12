import React, {useState, useContext, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import { AuthorizationForm } from './authorizationForm'; 
import AppServiceContext from '../app-service-context/app-service-context';

// type AuthorizationFormContainer = {
//   RestoService: React.ComponentType;
// };


const AuthorizationFormContainer = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const appContext = useContext(AppServiceContext);
 

  useEffect(() => {
    console.log(appContext.getPersonals());
    appContext.getPersonals()
        .then((res) => console.log(res)

          )
        // .catch(menuError())
  }, [])


        


  const onChangeEmailHandler = (emailValue) => {
    setEmail(emailValue);
    console.log(email);
  }

  const onChangePasswordHandler = (passValue) => {
    setPass(passValue);
    console.log(pass);
  }

  const handleSubmit = (event) => {
      
  }


  if(authorized) {
    return <Redirect to='/contacts'/>
    
   } else {
    return <AuthorizationForm 
              onChangeEmailHandler={onChangeEmailHandler} 
              onChangePasswordHandler={onChangePasswordHandler} 
              handleSubmit={handleSubmit} 
              password={pass}
              email={email}/>;
   }
}

export default AuthorizationFormContainer;
