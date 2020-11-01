import React from 'react'
import styled from 'styled-components';

const HeroWrapper = styled.div`
width:100%;
max-width:550px;
height:450px;
overflow:hidden;
cursor:pointer;
&:hover div {
    transform:scale(1.1)
}
&:hover div h2 {
    opacity:1;
}
div {
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items: flex-end;
    height:100%;
    background-image:url(${props=>props.imgMedium});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    transition: transform .3s;
    @media screen and (min-width:992px) {
        background-image:url(${props=>props.imgLarge});
    }
    h2 {
        padding: 0 75px 50px 0;
        font-size:3rem;
        font-family: 'Bitter';
        font-style:italic;
        font-weight:500;
        text-shadow: 2px 1px 2px rgba(0,0,0,.5);
        text-align:center;
        color:white;
        text-transform:capitalize;
        opacity:1;
        transition: opacity .3s;
        @media screen and (min-width:992px) {
            opacity:0;
        }
    }
}

`



const Hero = (props) => {
    return (
        <HeroWrapper imgMedium={props.imgMedium} imgLarge={props.imgLarge}>
            <div>
                <h2>{props.children}</h2>
            </div>
        </HeroWrapper>
    )
}

export default Hero;
