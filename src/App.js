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
@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat+Alternates&display=swap');
/* font-family: 'Bitter', serif;
font-family: 'Montserrat Alternates', sans-serif; 
400/500 italic
400/500 normal
400 mont
*/

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
    font-family: 'Bitter', serif;
    font-style:italic;
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
max-width:1440px;
margin:0 auto;
`

const App = () => {
    return (
        <AppWrapper>
        <GlobalStyle />
        <Navbar />
        <BrowserRouter>
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