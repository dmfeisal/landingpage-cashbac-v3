import React from 'react';
import { Link } from 'gatsby';
// import 'bulma';
// import heroBusiness from '../images/slider/cashbac-business-hero.png';
// import Navbar from './navbar';
// import Carousel from 'bulma-carousel';


const Hero = ({ siteTitle }) => (
	<div>
{/* MOBILE HERO*/}
	<section className="section is-hidden-desktop is-hidden-tablet" id="hero-homepage-mobile">
		<div>
			<div className="has-text-centered-mobile">
	      		<h1 className="title hero-title-homepage has-text-centered-mobile">
	      		Easiest way to get instant cashback. Anytime. Anywhere.
	      		</h1>
	      		<p className="subtitle has-text-centered-mobile has-text-centered-mobile">
	      		Cashbac is a free mobile app that gives you instant cashback for every transaction at your favorite merchants. With its features, Cashbac sets you free from many hassles of getting promos like topping up balances and allows you to get rewarded for eating, shopping, and taking care of yourself whenever and wherever you are.
	      		</p>
	      		
	      	</div>
	    </div>
	</section>


{/* DESKTOP AND TABLET HERO*/}
	<section className="section is-hidden-mobile" id="hero-homepage">
		<div className="container center">
			<div>
	      		<div>
	      		<h1 className="hero-title-homepage has-text-centered-desktop has-text-centered-tablet title">
	      		Easiest way to get instant cashback. Anytime. Anywhere.
	      		</h1>
	      		<p className="hero-subtitle-homepage has-text-centered-desktop has-text-centered-tablet subtitle">
	      		Cashbac is a free mobile app that gives you instant cashback for every transaction at your favorite merchants. With its features, Cashbac sets you free from many hassles of getting promos like topping up balances and allows you to get rewarded for eating, shopping, and taking care of yourself whenever and wherever you are.
	      		</p>
	      		</div>
	      	</div>
	    </div>
	</section>
	</div>
);

export default Hero;
