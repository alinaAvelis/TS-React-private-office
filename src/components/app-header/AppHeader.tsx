import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';

import "./appHeader.scss";

type AppHeaderProps = {
    name: string;
  };

const AppHeader = ({name}: AppHeaderProps) => {
    const [userName, setUserName] = useState("Безымянный пользователь")

    useEffect(() => {
        if(name) {
            setUserName(name);
        }
    }, [name]);


    return (
        <header className="header">
            <p>{userName}</p>
        </header>
    )
}

interface RootState {
    name: string;
  }

const mapStateToProps = (state: RootState) => {
    return {
      name: state.name,
    }
  }

export default connect(mapStateToProps)(AppHeader);