import React from 'react';
import { Banner, Div, Text, Sub } from './home-styles';
import ball from  '../../assets/ball.jpg';
import green from  '../../assets/green.jpg';
import Slide from 'react-reveal/Slide';

const styles = {
    width: '100vw', 
    height: '72.5vh',
    overflow: 'hidden', 
    background: `url(${green}) no-repeat`,
    backgroundSize: 'cover',
    padding: 0,
    objectFit: 'cover',
    backgroundPosition: 'center center',
    margin: 'auto'
}

const dullRed = {
    color:'#bf2c38'
}

const Home = () => {
    return (
        <Banner style={styles}>
           <Slide top>
                <Div>
                    <Text>Soccer For Life</Text>
                </Div>
           </Slide>
           <Slide right>
               <Sub>Find out the latest {' '}
                   <span style={dullRed}>scores</span>{' '} and {' '} 
                   <span style={dullRed}>trends</span>
                </Sub>
           </Slide>
        </Banner>
    )
}

export default Home;
