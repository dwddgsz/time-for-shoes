import React from 'react'
import Product from './Product';
import styled from 'styled-components';

const ProductListWrapper = styled.ul`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
max-width:1100px;
margin:0 auto;
`

const ProductsList = (props) => {

    const renderProducts = props.itemsList.map((product)=>{
        return (
            <Product key={product.id} product={product}/>
        )
    })

    return (
        <ProductListWrapper>
            {renderProducts}
        </ProductListWrapper>
    )
}

export default ProductsList;
