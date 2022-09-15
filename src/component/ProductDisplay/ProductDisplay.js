import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';

const ProductDisplay = ({title,productInfo}) => {
    console.log(productInfo)

    return (
        <Container>
            <Typography variant="h2">
                {title}
            </Typography>
            <Stack spacing={2}>
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