import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoActionCreator } from '../../redux/todo/actions';
import Input from '../../components/input';
import AddButton from '../../components/addButton';
import Box from '@mui/material/Box';

const AddTodoContainer = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleAddTodo = () =>{
        if(inputValue.trim() !== ''){
            dispatch(addTodoActionCreator(inputValue))
            setInputValue('')
        }
    }
    const handleBox = (e) => {
        e.preventDefault()
    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleBox}
        >
            <Input 
                value={inputValue}
                onChange={handleInputChange}
                />
            <AddButton
                onClick ={handleAddTodo}
                type='submit'
                >Add</AddButton>
        </Box>
    );
};

export default AddTodoContainer;