import React from 'react';
import Title from '../components/Title';
import ProductsList from '../components/ProductsList';
import {connect} from 'react-redux';



const Shoes = (props) => {
    return (
        <section>
             <Title>Shoes</Title>
             <ProductsList itemsList={props.shoes}/>
        </section>
    )
}

const mapStateToProps = (state) =>{
    return {
        shoes:state.cart.shoes,
    }
}

export default connect(mapStateToProps)(Shoes);