import React,{useState} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const NavigationWrapper = styled.nav`
position:relative;
top:0;
left:0;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:50px;
padding: 0 20px;
border-bottom: 1px solid var(--mainBlack);
@media screen and (min-width:1460px) {
    padding:0;
}
.logo {
    font-size:2.2rem;
    font-family: 'Bitter', serif;
    font-weight:500;
    letter-spacing:3px;
    a {
        color: var(----mainBlack);
    }
}
.burger {
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    height:15px;
    width:18px;
    background-color:transparent;
    border:none;
    z-index:3;
    cursor:pointer;
    &-line {
        width:100%;
        height:2.5px;
        background-color: var(--mainBlack);
        transform-origin:0%;
        transition: .6s transform;
    }
}
.burger.active{
    .burger-line:first-child {
        transform:rotate(45deg);
    }
    .burger-line:last-child {
        transform:rotate(-45deg);
    }
}

.menu-list {
        position:fixed;
        top:-100vh;
        left:0;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:100vh;
        width:100vw;
        background-color:var(--mainWhite);
        z-index:2;
        transition: .6s transform;
    }
.menu-list.active {
    transform:translateY(100vh);
}
.menu-item {
    padding:20px 0;
}

.menu-link {
    padding-bottom:5px;
    border-bottom: 2px solid transparent;
    font-size:1.8rem;
    font-family: 'Bitter', serif;
    font-style:italic;
    color: var(--mainBlack);
    &:hover {
        border-bottom: 2px solid var(--mainBlack);
    }
}
.navigation-cart-container {
    display:flex;
    flex-direction:column;
    align-items:center;
    border:none;
    background-color:transparent;
    cursor:pointer;
    font-family:'Montserrat Alternates', sans-serif; 
    font-style:normal;
    transition:.3s opacity;
    &:hover,:focus{
        opacity:.6;
    }
    h5 {
    font-size:1.6rem;
    font-weight:normal;
        a {
            color: var(----mainBlack);
        }
    }
    p {
        font-size:1rem;
    }
}

`


const Navbar = (props) => {
    const [menuActive,setMenuActive] = useState(false);


    return (
        <NavigationWrapper>
            <button onClick={()=>{setMenuActive(!menuActive)}} className={menuActive?'burger active': 'burger'}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
            <ul className={menuActive?'menu-list active': 'menu-list'}>
                <li className="menu-item"> <NavLink onClick={()=>{setMenuActive(!menuActive)}} className="menu-link" to="/">home</NavLink> </li>
                <li className="menu-item"> <NavLink onClick={()=>{setMenuActive(!menuActive)}} className="menu-link" to="/watches">watches</NavLink> </li>
                <li className="menu-item"> <NavLink onClick={()=>{setMenuActive(!menuActive)}} className="menu-link" to="/shoes">shoes</NavLink> </li>
            </ul>

            <h1 className="logo"><Link to='/'>TimeForShoes</Link></h1>

            <button className="navigation-cart-container">
                <h5 className="navigation-cart-heading"><Link to='/cart'>
                cart
                </Link>
                </h5>
                    <p className="navigation-cart-amount">(<span>{props.amount}</span>)</p>
            </button>


        </NavigationWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        amount: state.cart.totalAmount,
    }
}

export default connect(mapStateToProps)(Navbar);
