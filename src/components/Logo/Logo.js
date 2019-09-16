import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain2.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 mt0" style={{ display: 'flex', justifyContent: 'center' }}>
            <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner">
                    <img alt='brain' src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;