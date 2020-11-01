import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            		console.log("The payment was succeeded!", payment);

        }
 
        const onCancel = (data) => {

            console.log('The payment was cancelled!', data);

        }
 
        const onError = (err) => {

            console.log("Error!", err);

        }
 
        let env = 'sandbox';
        let currency = 'USD'; 
        let total = 1; 

 
        const client = {
            sandbox:    'AWhDxY8zPjPYwLV4sJR_ddmWKJaiaBUPYazsNXItmv8FOq6HARSCYu3eS4JH1qdbf3A7QUylpoL_S8Hf',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}