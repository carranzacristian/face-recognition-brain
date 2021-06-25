import React from 'react';

const Navigation = ({ onRouteChange, route }) => {
	let elements = null;
	switch(route){
		case 'home':
			elements = 
				<nav style={{zIndex:'3'}}>
					<p
						onClick={() => onRouteChange('signin')}
						className='f3 link dim black underline pa3 pointer'>Sign Out
					</p>
				</nav>;
			break;
		case 'signin':
			elements =
				<nav style={{zIndex:'3', display: 'flex'}}>
					<p
						onClick={() => onRouteChange('register')}
						className='f3 link dim black underline pa3 pointer'>Register
					</p>
				</nav>;
			break;
		case 'register':
			elements =
				<nav style={{zIndex:'3', display: 'flex'}}>
					<p
						onClick={() => onRouteChange('signin')}
						className='f3 link dim black underline pa3 pointer'>Sign In
					</p>
				</nav>;
			break;
		default:
			console.log('error: check for route state')
	}
	return elements;
}

export default Navigation;