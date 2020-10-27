import React from 'react';
import Logo from './img/logo.svg';
import {NavLink} from 'react-router-dom';


const Navbar = () => {

	const CartButton = () => {

	}

	return(
			<nav className= "navbar sticky-top navbar-expand-lg navbar-light">
				<NavLink exact to= "/">
					<img src= {Logo} />
				</NavLink>

			<div className= "collapse navbar-collapse" id="navbarSupportedContent">
				<ul className= "navbar-nav mr-auto">
					<li className= "nav-item active">
				      	<NavLink activeClassName= "activelink" className= "link" exact to= "/">
							Home
						</NavLink>
					</li>
					<li className= "nav-item active">
				      	<NavLink activeClassName= "activelink" className= "link" exact to= "/about">
							About
						</NavLink>
					</li>
					<li className= "nav-item active">
				      	<NavLink activeClassName= "activelink"  className= "link" exact to= "/store">
							Store
						</NavLink>
					</li>			
			    </ul>

			    <div className= "phone d-flex align-items-center">
					<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill">
						<path d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
					</svg>
					<h6> + 123 456 789 </h6>
				</div>
			</div>

			<div className= "cart d-flex align-items-center d-flex justify-content-center">
				<svg width="18px" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
				</svg>
				<h6> 2 Items - $10.49 </h6>
			</div>

			<button onClick= {CartButton} className= "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span>
					<svg viewBox="0 0 16 16" >
						<path d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
					</svg>
				</span>
			</button>

			</nav>
		)
}


export default Navbar;