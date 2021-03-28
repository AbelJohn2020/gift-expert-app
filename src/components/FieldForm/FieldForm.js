import React, { useState } from 'react';
import { Input } from '../Input/Input';
import FieldFormStyles from './FieldFormStyles';

const FieldForm = () => {
    const [fieldForm, setFieldForm] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newArray = [...fieldForm, inputValue];
        setFieldForm(newArray);
        setInputValue('');
    }
    return (
        <FieldFormStyles onSubmit={(e) => handleSubmit(e)}>
            <Input 
                type="text"
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <hr />
            <div>
                {fieldForm.map((input) => (
                <p key={input}>{input}</p>
                ))}
            </div>
        </FieldFormStyles>
    )
}

export default FieldForm;
