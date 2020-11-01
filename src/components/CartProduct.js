import React from 'react';
import styled from 'styled-components';


const CartProductWrapper = styled.li`
width:270px;
margin: 0 10px 20px;
text-align:center;

.cart-product-img {
    width:100%;
    height:180px;
}

.cart-product-name {
    padding:10px 0 5px;
    font-size:1.8rem;
}
.cart-product-price {
    padding-bottom: 5px;
    font-size:1.6rem;
}
.cart-product-amount-container {
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100px;
    margin:0 auto;
    button {
        width:30px;
        height:30px;
        border:1px solid var(--mainBlack);
        font-size:15px;
        background-color:transparent;
        cursor:pointer;
        transition: background-color .3s, color .3s;
        &:hover,&:focus {
            background-color: var(--mainBlack);
            color: var(--mainWhite);

        }
    }
}
`


const CartProduct = ({product}) => {
    return (
    <CartProductWrapper>
                    <img className="cart-product-img" src={product.img}></img>
                        <h4 className="cart-product-name">{product.name}</h4>
                    <p className="cart-product-price"><span className="cart-product-value">{product.value}</span>$</p>
                    <div className="cart-product-amount-container">
                            <button>-</button>
                            <span className="cart-product-amount">{product.amount}</span>
                            <button >+</button>
                    </div>
    </CartProductWrapper>
    );
}

export default CartProduct;