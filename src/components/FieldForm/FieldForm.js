import React, { useState } from 'react';
import { Input } from '../Input/Input';
import WriteInstruction from '../WriteInstruction/WriteInstruction';
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
            <ul>
                {fieldForm.map((input) => (
                    <WriteInstruction key={input} input={input}/>
                ))}
            </ul>
        </FieldFormStyles>
    )
}

export default FieldForm;
