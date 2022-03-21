import React, {useState} from'react';
import "./submitButton.scss";

type SubmitButtonProps = {
    value: string;
  };

export const SubmitButton = ({value}:SubmitButtonProps) => {
    // const [bgColor, setBgColor] = useState('none');
    // const [color, setColor] = useState('black');

    // const mouseEnterHundle = () => {
    //     setBgColor('#a3c7be');
    //     setColor('white');
    // }

    // const mouseLeaveHundle = () => {
    //     setBgColor('none');
    //     setColor('black');
    // }



    return (
        <input 
            className='submit_btn'
            type="submit"  
            value= {value}
            // onMouseEnter={mouseEnterHundle} 
            // onMouseLeave={mouseLeaveHundle}
        />
    )
}