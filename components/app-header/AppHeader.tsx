import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';

import "./appHeader.scss";
import Button from '../button/button';
import {reAuthorithation} from "../../actions";

type AppHeaderProps = {
    name: string;
    auth: string;
    reAuthorithation: Function;
  };

const AppHeader = ({name, auth, reAuthorithation}: AppHeaderProps) => {
    const [userName, setUserName] = useState("Безымянный пользователь")

    useEffect(() => {
      console.log(name);
        if(name) {
            setUserName(name);
            console.log(userName);
        }

        if(localStorage.getItem('userName')) {
          setUserName(localStorage.userName);
        }
    }, [name]);

    const onClickHundler = () => {
      reAuthorithation();
      localStorage.authorized = "false";
    }


    return (
        <header className="header">
            <p>{userName}</p>
            <Button 
              text="Выйти" 
              classBtn='button'
              onClickHundler={onClickHundler} />
        </header>
    )
}

interface RootState {
    name: string;
    auth: string;

  }

const mapStateToProps = (state: RootState) => {
    return {
      name: state.name,
      auth: state.auth
    }
  }

  const mapDispatchToProps = {
    reAuthorithation
  }

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);