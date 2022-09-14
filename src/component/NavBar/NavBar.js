import React from 'react';
import { AppBar,Toolbar, IconButton, Typography  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuList from '../MenuList/MenuList';


const NavBar = ({categoryData}) => {
    return (
        <AppBar position='static'
        elevation={0}>
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                    <MenuList categoryData={categoryData}/>
                </IconButton>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <Typography> Window Shop Mart</Typography>
                <IconButton>
                    <ShoppingBasketOutlinedIcon/>
                </IconButton>
            </Toolbar>

        </AppBar>
    )
}

export default NavBar