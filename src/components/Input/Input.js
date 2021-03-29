import React from 'react';
import InputStyles from './InputStyles';

export const Input = ({type, inputValue, setInputValue, placeholder}) => {
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <InputStyles 
                type={type}
                value={inputValue}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
        </>
    )
}
