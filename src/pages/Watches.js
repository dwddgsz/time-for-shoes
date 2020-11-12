import React from 'react';
import {connect} from 'react-redux';
import ProductsList from '../components/ProductsList';
import Title from '../components/Title';


const Watches = (props) => {
    return (
        <section>
             <Title>Watches</Title>
             <ProductsList itemsList={props.watches}/>
        </section>
    )
}

const mapStateToProps = (state) =>{
    return {
        watches:state.cart.watches,
    }
}

export default connect(mapStateToProps)(Watches);