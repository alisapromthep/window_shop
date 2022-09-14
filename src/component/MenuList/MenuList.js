import React from 'react';
import {Container, MenuItem} from '@mui/material';


const MenuList = ({categoryData}) => {

    return (
        <Container>
            {
                categoryData.map((category,index)=>{
                    return (
                        <MenuItem key={index}>
                        {category}
                        </MenuItem>
                    );
                })
            }
        </Container>
    )
}

export default MenuList;