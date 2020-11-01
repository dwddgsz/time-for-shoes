import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ProductsList from '../components/ProductsList';
import Title from '../components/Title';

const WatchesWrapper = styled.section`
`


const Watches = (props) => {
    return (
        <WatchesWrapper>
             <Title>Watches</Title>
             <ProductsList itemsList={props.watches}/>
        </WatchesWrapper>
    )
}

const mapStateToProps = (state) =>{
    return {
        watches:state.cart.watches,
    }
}

export default connect(mapStateToProps)(Watches);