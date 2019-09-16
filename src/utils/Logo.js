import React from 'react';
import {Link} from 'react-router-dom';
import ImageLogo from '../assets/logo.png'

const Logo = props => {
    const styles = {
        background: `url(${ImageLogo}) no-repeat`,
        width: '120px',
        height: '70px',
        backgroundSize: 'cover'
    }
    const template = <div style={styles}></div>

    const isLink =   props.link ? 
    (
     <Link to={props.linkTo}>{template}</Link>
    ) : template

    return isLink;
}

export default Logo;
