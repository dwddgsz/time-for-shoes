import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Watches from './pages/Watches';
import Shoes from './pages/Shoes';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

const GlobalStyle = createGlobalStyle`

:root {
    --mainWhite: #fff;
    --mainBlack: #111;
}

*,*::before,*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html,body {
    height:100%;
}
html {
    font-size:62.5%;
}
body {
    font-family: 'Montserrat Alternates', sans-serif;
}
ul {
    list-style:none;
}

button {
    font-family: 'Montserrat Alternates', serif;
}

button:focus {
    outline:none;
}

a {
    text-decoration:none;
}

a:active,a:focus {
    outline:none;
}
`
const AppWrapper = styled.div`
position:relative;
max-width:1440px;
margin:0 auto;
`

const App = () => {
    return (
        <AppWrapper>
        <GlobalStyle />
        <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/watches" component={Watches}/>
        <Route path="/shoes" component={Shoes}/>
        <Route path="/cart" component={Cart}/>
        <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
        </AppWrapper>
    )
}

export default App;