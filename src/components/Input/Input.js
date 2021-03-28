import React from 'react';
import InputStyles from './InputStyles';

export const Input = ({type, inputValue, setInputValue}) => {
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <InputStyles 
                type={type}
                value={inputValue}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}
