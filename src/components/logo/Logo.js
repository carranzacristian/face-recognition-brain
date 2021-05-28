import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brainLogo2.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'> 
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{position: 'relative', zIndex: '3', height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3" style={{width: '100%', height:'100%'}}>
 					<img  alt='logo' src={brain}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;