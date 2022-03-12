import React from 'react';

type InputProps = {
    type: string;
    name: string;
    inputId: string;
    inputValue: string;
    onChangeHandler: Function;
    placeholder: string;
  };

const Input = ({type, name, inputId, inputValue, onChangeHandler, placeholder} : InputProps) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(event.target.value)
    }
    return (
        <input type={type} name={name} id={inputId} value={inputValue} placeholder={placeholder}  onChange={onChange}/>
    )
}

export default Input;