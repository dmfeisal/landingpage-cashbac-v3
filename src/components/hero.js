import React from 'react';
import { Link } from 'gatsby';
import buttonGooglePlay from '../images/google_badge_en_get.svg';
import buttonAppStore from '../images/appstore_badge_en.svg';
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
	      		Cashbac is a free mobile app that gives you instant cashback for every transaction at your favorite merchants, setting you free from many hassles in getting promos and rewarding yourself.
	      		</p>
	      		
	      	</div>
	    </div>
	</section>


{/* DESKTOP AND TABLET HERO*/}

	<section className="section has-text-left-tablet has-text-left-desktop is-hidden-mobile" id="hero-homepage">
		
			<div>
	      		<div className="container">
	      		<h1 className="hero-title-homepage has-text-left-tablet has-text-left-desktop title">
	      		Easiest way to get instant cashback. Anytime. Anywhere.
	      		</h1>
	      		<p className="hero-subtitle-homepage has-text-left-tablet has-text-left-desktop has-text-centered-tablet subtitle">
	      		Cashbac is a free mobile app that gives you instant cashback for every transaction at your favorite merchants, setting you free from many hassles in getting promos and rewarding yourself.
	      		</p>
	      		<div>
					<a href="https://cashbac.onelink.me/1sXQ/homepage">
					<img width="140px" src={buttonGooglePlay} alt="Get On Google Play" />
					</a>
					&nbsp; &nbsp;
					<a href="https://cashbac.onelink.me/1sXQ/homepage">
					<img width="140px" src={buttonAppStore} alt="Get On App Store" />
					</a>
				</div>	
	      		</div>
	      		<hr className="spacer is-2"></hr>

	      	</div>
	    
	</section>
	</div>
);

export default Hero;
