import React from 'react'
import styled from 'styled-components';

const SignButtons = (props) => {
    // const [buttonName]=props.buttonName;
  return (
    <div>
        <Button>{props.buttonName}</Button>
    </div>
  )
}

const Button=styled.button`
    height: 100px;
    width: 200px;
    border: 2px solid black;
    border-radius: 5px;
    color: #353839;
`;

export default SignButtons;