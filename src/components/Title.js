import React from 'react'
import styled from 'styled-components';

const TitleWrapper = styled.h1`
padding: 50px 0;
font-size:3.5rem;
font-family:'Bitter', serif;
font-style:italic;
font-weight:400;
text-align:center;
letter-spacing:3px;
text-transform:capitalize;
`


const Title = (props) => {
    return (<TitleWrapper>
        {props.children}
    </TitleWrapper>);
}

export default Title;
