import React from 'react';
import {productsWatches} from '../assets/products-watches';
import Title from '../components/Title';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';

const WatchesWrapper = styled.section`
`


const Watches = () => {
    return (
        <WatchesWrapper>
             <Title>Watches</Title>
             <ProductsList itemsList={productsWatches}/>
        </WatchesWrapper>
    )
}

export default Watches;