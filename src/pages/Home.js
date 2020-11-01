import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Hero from '../components/Hero';
import watchBgMedium from '../assets/images/watches-images/bg-medium.jpg';
import watchBgLarge from '../assets/images/watches-images/bg-large.jpg';
import shoesBgMedium from '../assets/images/shoes-images/bg-medium.jpg';
import shoesBgLarge from '../assets/images/shoes-images/bg-large.jpg';
import {Link} from 'react-router-dom';

const HomeWrapper = styled.section`

.hero-container {
max-width:1100px;
margin:0 auto;
padding: 0 20px;
display:flex;
flex-direction:column;
align-items:center;
@media screen and (min-width:992px) {
    flex-direction:row;
    justify-content:center;
}
@media screen and (min-width:1480px) {
    padding:0;
}
}
.hero-link {
    width:100%;
    display:flex;
    justify-content:center;
}
`

const Home = () => {
    return (
        <HomeWrapper>
            <Title> Choose category </Title>
            <div className="hero-container">
            <Link className="hero-link" to="/shoes">
            <Hero imgMedium={shoesBgMedium} imgLarge={shoesBgLarge}>shoes</Hero>
            </Link>
            <Link className="hero-link" to="/watches">
            <Hero imgMedium={watchBgMedium} imgLarge={watchBgLarge}>watches</Hero>
            </Link>
            </div>
        </HomeWrapper>
    )
}

export default Home;
