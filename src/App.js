import React from 'react';
import { createGlobalStyle } from 'styled-components';

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


const App = () => {
    return (
        <>
        <GlobalStyle />
        <div>App</div>
        <a>dsd</a>
        <button>ds</button>
        </>
    )
}

export default App;