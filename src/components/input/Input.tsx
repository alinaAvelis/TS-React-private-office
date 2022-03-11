import React from 'react';

type InputProps = {
    type: string;
    name: string;
    inputId: string;
  };

const Input = ({type, name, inputId} : InputProps) => {
    return (
        <input type={type} name={name} id={inputId}/>
    )
}

export default Input;