import React from 'react';
import "./button.scss";

type ButtonProps = {
    text: string;
    onClickHundler: Function;
    classBtn: string;
  };

const Button = ({text, onClickHundler, classBtn} : ButtonProps) => {
    return (
        <button 
            className={classBtn}
            type="button"
            onClick={() => {onClickHundler()}}>
            {text}
        </button>
    )
}

export default Button;