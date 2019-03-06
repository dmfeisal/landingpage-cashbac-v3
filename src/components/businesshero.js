import React from 'react';
import { Link } from 'gatsby';
// import 'bulma';
// import heroBusiness from '../images/slider/cashbac-business-hero.png';
// import Navbar from './navbar';
// import Carousel from 'bulma-carousel';


const Businesshero = ({ siteTitle }) => (
	<div>
{/* MOBILE HERO*/}
	<section className="section hero is-hidden-desktop is-hidden-tablet">
		<div id="business-hero">
			<div className="has-text-centered-mobile">
	      		<h1 className="hero-text-title title has-text-centered-mobile">
	      		Solve marketing issues. Complete business goals.
	      		</h1>
	      		<p className="subtitle hero-text-subtitle has-text-centered-mobile">
	      		From increasing your traffic to understanding your customers, Cashbac Business is the growth marketing platform that helps you do it all with consumer insights and profile packed in a single dashboard just for you.
	      		</p>
	      		<div className="button is-info is-rounded cta-business-mobile">
		      		<Link to="business/#business-features">
						Learn More
		          	</Link>
	      		</div>
	      	</div>
	    </div>
	</section>


{/* DESKTOP AND TABLET HERO*/}
	<section className="section hero is-hidden-mobile">
		<div id="business-hero-desktop">
			<div className=" container has-text-left-desktop has-text-left-tablet">
	      		<div>
	      		<h1 className="hero-text-title-desktop title">
	      		Solve marketing issues.<div></div>Complete business goals.
	      		</h1>
	      		<p className="subtitle hero-text-subtitle-desktop">
	      		From increasing your traffic to understanding your customers, Cashbac Business is the growth marketing platform that helps you do it all with consumer insights and profile packed in a single dashboard just for you. 
	      		</p>
		      		<div className="button is-info is-rounded cta-business">
			      		<Link className="has-text-left-desktop" to="business/#business-features">
							Learn More
			          	</Link>
		      		</div>
	      		</div>
	      	</div>
	    </div>
	</section>
	</div>
);

export default Businesshero;
