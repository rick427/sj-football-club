import React from 'react';
import { Banner, Div, Text, Sub } from './home-styles';
import ball from  '../../assets/ball.jpg';
import green from  '../../assets/green.jpg';

const styles = {
    width: '100vw', 
    height: '69.5vh', 
    background: `url(${green}) no-repeat`,
    backgroundSize: 'cover',
    padding: 0,
    objectFit: 'cover',
    backgroundPosition: 'center center',
    margin: 'auto'
}

const Home = () => {
    return (
        <Banner style={styles}>
           <Div>
               <Text>Soccer For Life</Text>
           </Div>
           <Div>
               <Sub>Find out the latest scores and trends</Sub>
           </Div>
        </Banner>
    )
}

export default Home;
