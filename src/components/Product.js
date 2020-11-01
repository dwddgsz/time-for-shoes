import React from 'react'
import styled from 'styled-components';
import {addToCart} from '../actions/actions';
import {connect} from 'react-redux';


const ProductWrapper = styled.li`
width:280px;
margin: 0 auto 30px;
text-align:center;
img {
    width:100%;
    height:180px;
}
h4 {
    padding:20px 0 5px;
    font-size:2rem;
    text-transform:capitalize;
}
p {
    font-size:1.6rem;
    padding-bottom:5px;
        span {
            margin-right:2px;
        }
}


.button-product {
    padding:5px 10px;
    border:1px solid var(--mainBlack);
    font-size:1.7rem;
    letter-spacing:1px;
    transition:.3s background-color, .3s color;
    cursor:pointer;
}
.button-not-in-cart {
    background-color: transparent;
    &:hover,&:focus {
        background-color: var(--mainBlack);
        color: var(--mainWhite);
    }
}

.button-in-cart {
    background-color: var(--mainBlack);
    color: var(--mainWhite);
}
`
const Product = ({product,addToCart}) => {

    const renderButton = (inCart) => {
        if (inCart) return <button className="button-product button-in-cart" disabled={true}>In cart</button>
        else return <button className="button-product button-not-in-cart" onClick={()=>addToCart(product)}>Add to cart</button>
    }

    return (
    <ProductWrapper>
        <img src={product.img}></img>
        <h4>{product.name}</h4>
        <p><span>
            {product.value}
            </span>
            $</p>
        {renderButton(product.inCart)}
    </ProductWrapper>
    )
}


export default connect(null,{addToCart})(Product);
