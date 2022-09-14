import React from 'react';
import {Menu, MenuItem} from '@mui/material';


const MenuList = ({categoryData}) => {

    return (
        <Menu>
            {
                categoryData.map((category,index)=>{
                    return (
                        <MenuItem key={index}>
                        {category}
                        </MenuItem>
                    );
                })
            }
        </Menu>
    )
}

export default MenuList;