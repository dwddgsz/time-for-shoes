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

    const renderItems = props.itemsList.map((item)=>{
        return (
            <Product key={item.id} item={item}/>
        )
    })

    return (
        <ProductListWrapper>
            {renderItems}
        </ProductListWrapper>
    )
}

export default ProductsList;
