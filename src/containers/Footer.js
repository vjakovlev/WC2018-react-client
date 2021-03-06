import React, { Component } from 'react';
import fifa from '../images/fifa_logo.png';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className='container'>
				<nav class="navbar navbar-expand-lg navbar-light bg-light" id="footerNav">
				    <a href="https://www.fifa.com/worldcup/" target="_blank" id="footerLeft">
				        <img src={fifa} id="mainLogo" />
				    </a>
				    <span>Coded by: <a href="https://www.facebook.com/viktor.jakovlev1">Viktor Jakovlev (G1)</a></span>
				    <div id="footerRight">
				        <ul id="footerUl">
				            <li><a href="https://www.facebook.com/fifaworldcup" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
				            <li><a href="https://www.instagram.com/fifaworldcup/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
				            <li><a href="https://twitter.com/FifaWorldCup" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
				            <li><a href="https://www.youtube.com/FIFATV" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
				        </ul>
				    </div>
				</nav>
			</div>
		);
	}
}

export default Footer;