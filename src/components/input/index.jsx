import React from 'react';
import TextField from '@mui/material/TextField';

const Input = (props) => {
    const {
        value, 
        onChange,
        type='text'
    } = props

    return (
        <>
            <TextField 
                id="outlined-basic" 
                label="To-Do List  ☺️" 
                variant="outlined"
                placeholder={'E.g. read the book'}
                value={value}
                type={type}
                onChange={onChange}
            />
        </>
    );
};

export default Input;