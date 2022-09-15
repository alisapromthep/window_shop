import React from 'react';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from '@mui/material';

const ProductCard = ({name, image, price}) => {

    return (
        <Card>
            <CardContent>
                <Typography>card</Typography>
                <Typography>{name}</Typography>
            </CardContent>
            <CardMedia
            component="img"
            height="10rem"
            image={image}
            alt=""
            />
            <CardActions>
                <Button>
                    {`add ${price}`}
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard