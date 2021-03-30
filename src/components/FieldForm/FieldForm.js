import React, { useState } from 'react';
import { Input } from '../Input/Input';
import WriteInstruction from '../WriteInstruction/WriteInstruction';
import FieldFormStyles from './FieldFormStyles';

const FieldForm = () => {
    const [fieldForm, setFieldForm] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [firstValidation, setFirstValidation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newArray = [inputValue];
        setFieldForm(newArray);
        setInputValue('');

        if(inputValue==='') {
            setFieldForm(fieldForm);
            setFirstValidation(true);
        } else {
            setFirstValidation(false)
        }
    }

    return (
        <FieldFormStyles onSubmit={(e) => handleSubmit(e)}>
            <Input 
                type="text"
                inputValue={inputValue}
                setInputValue={setInputValue}
                placeholder="Write something..."
            />
            {firstValidation && <p className="canNotBeBlank">This field can not be blank</p>}
            <ul>
                {fieldForm.map((input) => (
                    <WriteInstruction key={input} input={input}/>
                ))}
            </ul>
        </FieldFormStyles>
    )
}

export default FieldForm;
