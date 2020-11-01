import React from 'react';
import {productsShoes} from '../assets/products-shoes';
import Title from '../components/Title';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';


const ShoesWrapper = styled.section`
`


const Shoes = () => {
    return (
        <ShoesWrapper>
             <Title>Shoes</Title>
             <ProductsList itemsList={productsShoes}/>
        </ShoesWrapper>
    )
}

export default Shoes;