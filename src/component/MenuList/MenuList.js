import React from 'react';
import {Container, MenuItem} from '@mui/material';


const MenuList = ({categoryData, handleCloseMenu}) => {

    return (
        <Container>
            {
                categoryData.map((category,index)=>{
                    return (
                        <MenuItem key={index}
                        onClick={handleCloseMenu}
                        >
                        {category}
                        </MenuItem>
                    );
                })
            }
        </Container>
    )
}

export default MenuList;