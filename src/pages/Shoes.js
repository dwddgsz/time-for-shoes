import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
import ProductsList from '../components/ProductsList';
import {connect} from 'react-redux';


const ShoesWrapper = styled.section`
`


const Shoes = (props) => {
    return (
        <ShoesWrapper>
             <Title>Shoes</Title>
             <ProductsList itemsList={props.shoes}/>
        </ShoesWrapper>
    )
}

const mapStateToProps = (state) =>{
    return {
        shoes:state.cart.shoes,
    }
}

export default connect(mapStateToProps)(Shoes);