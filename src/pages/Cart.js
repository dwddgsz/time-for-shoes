import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import {connect} from 'react-redux';
import CartProduct from '../components/CartProduct';

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
span{
    color: blue;
    cursor:pointer;
}
}

`


const Cart = (props) => {
    let shoesInCart = false;
    let watchesInCart = false;
    const renderShoesAddedToCart = () => {
        return props.shoes.map(shoe=>{
            if (shoe.inCart) {
                return <CartProduct key={shoe.id} product={shoe} />
            }
            else {
                return null
            }
        })
    }

    const checkForProducts = () => {
        props.shoes.forEach((shoe=>{
            if(shoe.amount !== 0) {
                shoesInCart = true;
            }
        }));
        props.watches.forEach((watch=>{
            if(watch.amount !== 0) {
                watchesInCart = true;
            }
        }))
        if (watchesInCart || shoesInCart){
            return (
                <>
                <Title>Cart</Title>
                <div className="cart-content-container">
                <div className="cart-list-container">
                <h4 className="cart-list-title">chosen products</h4>
                <ul className="cart-list">
                    {renderShoesAddedToCart()}
                    {renderWatchesAddedToCart()}
                </ul>
                </div>
                <PaymentWrapper>
                <h4 className="payment-title">Payment</h4>
                    <p className="payment-price">
                    Total cost:<span className="payment-value">{props.value}</span>$
                        </p>
                    <form className="payment-terms-container">
                        <input className="payment-terms-checkbox" id="terms-checkbox" type="checkbox"></input>
                        <label className="payment-term-custom-checkbox" htmlFor="terms-checkbox"><span></span></label>
                        <p className="payment-terms-description">Accept <span href='#'>terms</span></p>
                    </form>
                </PaymentWrapper>
                </div>
                </>
            )
        } else {
            return (
                <Title>Your cart is empty</Title>
            )
        }
    
    }

    const renderWatchesAddedToCart = () => {
        return props.watches.map(watch=>{
            if (watch.inCart) {
                return <CartProduct key={watch.id} product={watch} />
            }
            else {
                return null
            }
        })
    }


    return (
        <CartWrapper>
            {checkForProducts()}
        </CartWrapper>
        )
    }
    
const mapStateToProps = (state) => {
    return {
        watches: state.cart.watches,
        shoes: state.cart.shoes,
        value: state.cart.totalValue,

    }
}

export default connect(mapStateToProps)(Cart);
