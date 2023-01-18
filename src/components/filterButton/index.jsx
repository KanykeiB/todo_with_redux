import React from 'react';
import Button from '@mui/material/Button';

const FilterButton = (props) => {
    const{
        onClick,
        children
    } = props
    return (
        <>
            <Button 
                onClick={onClick}
                sx={{ color:"white", backgroundColor: "#eba3b6", ml:5}}
            >

                
                    {children}
            </Button>
            
        </>
    );
};

export default FilterButton;