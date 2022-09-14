import React from 'react';
import Carousel from 'react-material-ui-carousel';
import sale from '../../assets/images/sale.jpg';
import shoppingcos from '../../assets/images/cosmeticincart.jpg';
import giantteddy from '../../assets/images/giantteddy.jpg';
import {Box, Typography, Paper} from '@mui/material';


const Hero = () => {

    const displayList = [
        {
            id:"1",
            description: "Lorem ipsum dolor sit amet",
            img: sale,
            tag: "Lorem ipsum dolor sit"
    },
        {
            id: "2",
            description: "Lorem ipsum dolor sit amet",
            img: shoppingcos,
            tag: "Lorem ipsum dolor sit"
        },

    ]

    return (
        <Carousel>
            {displayList.map((item,i)=>{
                return (
                    <Paper key={i}>
                        <Box>
                        <img src={item.img} alt="item.description" width="100%"/>
                        </Box>
                        <Typography>{item.tag}</Typography>
                    </Paper>

                )
            })}
        </Carousel>
    )
}

export default Hero