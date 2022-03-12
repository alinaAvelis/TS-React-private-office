import React, {useState} from'react';

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
            type="submit"  
            value= {value}
            // onMouseEnter={mouseEnterHundle} 
            // onMouseLeave={mouseLeaveHundle}
        />
    )
}