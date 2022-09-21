import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography, Stack, Container } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';

const ProductDisplay = ({title,productInfo}) => {
    console.log(productInfo)

    return (
        <Container>
            <Typography variant="h2">
                {title}
            </Typography>
            <Carousel>
            {productInfo.map((product,i)=>{
                return (
                    <ProductCard key={i}
                    name={product.title}
                    image={product.image}
                    price={product.price}
                    />
                )
            })}
            </Carousel>
            <Stack spacing={2} sx={{display:{mobile:"none"}}}>
            {productInfo.map((product,i)=>{
                return (
                    <ProductCard key={i}
                    name={product.title}
                    image={product.image}
                    price={product.price}
                    />
                )
            })}
            </Stack>

        </Container>
    )
}

export default ProductDisplay