import React from 'react';
import './Hero.scss';
import Carousel from 'react-material-ui-carousel';
import sale from '../../assets/images/sale.jpg';
import giantteddy from '../../assets/images/giantteddy.jpg';
import {Box, Typography, Paper,Button} from '@mui/material';


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
            img: giantteddy,
            tag: "Lorem ipsum dolor sit"
        },

    ]

    return (
        <Carousel>
            {displayList.map((item,i)=>{
                return (
                    <Paper key={i}
                    sx={{display: "flex", justifyContent:"center"}}
                    >
                        <img className= "hero__img" src={item.img} alt="item.description"/>
                        <Box sx={{position: "absolute", bottom:"2rem", }}>
                            <Typography>{item.tag}</Typography>
                            <Button variant="contained" fullWidth="true" >shop</Button>
                        </Box>
                    </Paper>

                )
            })}
        </Carousel>
    )
}

export default Hero