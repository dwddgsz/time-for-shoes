import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import customImg from '../assets/images/watches-images/product-3.jpg';

const CartWrapper = styled.article`

.cart-content-container {
    @media screen and (min-width:1200px) {
        display:flex;
        justify-content:space-between;
    }
}
.cart-list-container {
margin:0 auto;
max-width:900px;
border-bottom:1px solid var(--mainBlack);
@media screen and (min-width:1200px) {
        border-bottom:none;
    }
}
.cart-list-title {
    padding-bottom:30px;
    font-size:2.6rem;
    font-family: 'Bitter';
    font-style:italic;
    font-weight:normal;
    text-transform:capitalize;
    text-align:center;
    letter-spacing:2px;
}
.cart-list {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
}
`
const CartItemWrapper = styled.li`
width:270px;
margin: 0 10px 20px;
text-align:center;

.cart-product-img {
    width:100%;
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
const PaymentWrapper = styled.section`
max-width:300px;
margin:0 auto;
text-align:center;

@media screen and (min-width:1200px) {
        border-left:1px solid var(--mainBlack);
        padding-left:100px;
    }

.payment-title {
    padding:30px 0;
    font-size:2.6rem;
    font-family: 'Bitter';
    font-style:italic;
    font-weight:normal;
    text-transform:capitalize;
    text-align:center;
    letter-spacing:2px;

    @media screen and (min-width:1200px) {
        padding-top:0;
    }

}

.payment-price {
font-size:1.7rem;
padding-bottom:20px;
}
.payment-value {
    padding:0 2px;
}

.payment-terms-container {
display:flex;
justify-content:center;
align-items:center;
}

.payment-terms-checkbox {
    position:absolute;
    visibility:hidden;
}

.payment-terms-checkbox:checked ~ .payment-term-custom-checkbox span {
    display:block;
}

.payment-term-custom-checkbox {
display:flex;
justify-content:center;
align-items:center;
width:15px;
height:15px;
border:2px solid var(--mainBlack);
border-radius:50%;
cursor:pointer;

span {
    display:none;
    width:7px;
    height:7px;
    border-radius:50%;
    background-color:var(--mainBlack);
}

}

.payment-terms-description {
margin-left:10px;
font-size:1.6rem;
}


`

const Cart = () => {
    return (
        <CartWrapper>
            <Title>Cart</Title>


            <div className="cart-content-container">

            <div className="cart-list-container">
            <h4 className="cart-list-title">chosen products</h4>
            <ul className="cart-list">

                <CartItemWrapper>
                    <img className="cart-product-img" src={customImg}></img>
                    <h4 className="cart-product-name">product</h4>
                    <p className="cart-product-price"><span className="cart-product-value">43</span>$</p>
                    <div className="cart-product-amount-container">
                            <button>-</button>
                            <span className="cart-product-amount">3</span>
                            <button >+</button>
                    </div>
                </CartItemWrapper>

            </ul>
            </div>

            <PaymentWrapper>
                <h4 className="payment-title">Payment</h4>
                <p className="payment-price">
                    Total cost:<span className="payment-value">32</span>$
                </p>
                <form className="payment-terms-container">
                    <input className="payment-terms-checkbox" id="terms-checkbox" type="checkbox"></input>
                    <label className="payment-term-custom-checkbox" htmlFor="terms-checkbox"><span></span></label>
                    <p className="payment-terms-description">Accept <a href='#'>terms</a></p>
                </form>
            </PaymentWrapper>


            </div>


        </CartWrapper>
    )
}

export default Cart;
