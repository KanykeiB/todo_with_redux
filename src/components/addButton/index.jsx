import React from 'react';
import Button from '@mui/material/Button';
import Styles from './index.module.css';

const AddButton = (props) => {
    const{
        onClick,
        children
    } = props
    return (
        <>
            <Button 
                onClick={onClick}
                size="medium"
                type='submit'
                sx={{
                    color:'white',
                    backgroundColor:'#eba3b6',
                    py: '15px',
                    ml: 1
                }}
                >
                    {children}
            </Button>
        </>
    );
};

export default AddButton;