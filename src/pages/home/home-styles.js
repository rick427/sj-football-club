import styled from 'styled-components';

export const Banner= styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 box-shadow: inset 200px 150px 250px #000000, inset -200px -150px 250px #000000;
`;

export const Div= styled.div`
padding: .5rem;
`;

export const Text= styled.div`
 color: #fff;
 font-family: 'Poiret One',cursive;
 font-size: 5rem;
 background: linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Sub= styled.div`
 color: #fff;
 font-family: 'Dancing Script', cursive;
 font-size: 2.5rem;
`;
