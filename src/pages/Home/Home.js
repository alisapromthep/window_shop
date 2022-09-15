import React from 'react';
import axios from 'axios';
import Hero from '../../component/Hero/Hero';
import ProductDisplay from '../../component/ProductDisplay/ProductDisplay';
import {useState, useEffect} from 'react';


const Home = () => {

    const [bestsellerData, setBestSellerData] = useState([]);

    useEffect(()=>{

        axios
            .get(`https://fakestoreapi.com/products?limit=5`)
            .then(res=>{
                setBestSellerData(([...res.data]))
            })
            .catch(err => console.log(err))

    }, []);

    
    return (
        <div>
            <Hero/>
            <ProductDisplay title="Our Best Sellers" productInfo={bestsellerData}/>
        </div>
    )
}

export default Home