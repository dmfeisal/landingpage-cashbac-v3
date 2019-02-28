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
	      		It’s easy to drive your business
	      		</h1>
	      		<p className="subtitle hero-text-subtitle has-text-centered-mobile">Cashbac business is an online marketing platform to help you attract a new customer, drive more sales and give an impact on your business
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
			<div className="has-text-left-desktop has-text-left-tablet">
	      		<div>
	      		<h1 className="hero-text-title-desktop title">
	      		It’s easy to drive your business
	      		</h1>
	      		<p className="subtitle hero-text-subtitle-desktop">Cashbac business is an online marketing platform to help you attract a new customer, drive more sales and give an impact on your business
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
