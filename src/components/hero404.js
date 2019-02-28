import React from 'react';
import { Link } from 'gatsby';
// import 'bulma';
// import heroBusiness from '../images/slider/cashbac-business-hero.png';
// import Navbar from './navbar';
// import Carousel from 'bulma-carousel';


const Hero404 = ({ siteTitle }) => (
	<section className="hero" id="404-hero">
		<div className="container hero-body">
				<hr className="spacer is-6"></hr>
				<div className="container" id="hero-404">
		      		<h1 className="title is-8">
		      		404
		      		</h1>

		      		<p className="subtitle">
		      		Ooops! the page you requested was not found!
		      		</p>
		      		
		      		<div className="button is-info is-rounded">
			      		<Link to="/">
	    					Back to Homepage
			          	</Link>
		      		</div>
		      	</div>
			</div>
	</section>
);

export default Hero404;
