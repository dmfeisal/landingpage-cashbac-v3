import React from 'react';
import { Link } from 'gatsby';
// import 'bulma';
// import heroBusiness from '../images/slider/cashbac-business-hero.png';
// import Navbar from './navbar';
// import Carousel from 'bulma-carousel';


const Businesshero = ({ siteTitle }) => (
	<section className="hero is-medium" id="business-hero">
		<div className="ccontainer hero-body">
			
						<div className="container" id="hero-text">
				      		<h1 className="title">
				      		It’s easy to drive your business
				      		</h1>
				      		<p className="subtitle">Cashbac business is an online marketing platform to help you attract a new customer, drive more sales and give an impact on your business
				      		</p>
				      		<div className="button is-info is-rounded">
					      		<Link to="business/#business-features">
	            					Learn More
					          	</Link>
				      		</div>
				      	</div>
		</div>
	</section>
);

export default Businesshero;
