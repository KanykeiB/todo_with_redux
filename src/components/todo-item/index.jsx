import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Styles from './index.module.css';

const TodoItem = (props) => {
    const{ 
        text,
        onClick,
        isComplete,
        onDelete
    } = props
    return (
        <ListItem
            onClick={onClick}
            className={Styles.cardItem}
            style={{
                textDecoration: isComplete ? 'line-through' : 'none'
            }}
        >
            <ListItemText>
                {text}
            </ListItemText>
            <DeleteIcon
                onClick={onDelete}
                size='medium'
                sx={{ m:'5px'}}
            />
        </ListItem>
    );
};

export default TodoItem;