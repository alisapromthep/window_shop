import React from 'react';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';

const ProductCard = ({name, image, price}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Typography>{name}</Typography>
            </CardContent>
            <CardMedia
            component="img"
            height="200"
            image={image}
            alt=""
            sx={{objectFit:"contain"}}
            />
            <CardActions>
                <Button variant="outlined" fullWidth="true">
                    {`add $${price}`}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard