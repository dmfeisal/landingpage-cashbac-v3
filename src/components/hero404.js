import React from 'react';
import { Link } from 'gatsby';
import beaconImage from '../images/cashbac-beacon.svg';
// import 'bulma';
// import heroBusiness from '../images/slider/cashbac-business-hero.png';
// import Navbar from './navbar';
// import Carousel from 'bulma-carousel';


const Hero404 = ({ siteTitle }) => (
	<div>
	{/* MOBILE HERO*/}
		<section className="section hero is-hidden-desktop is-hidden-tablet has-text-centered-mobile" id="hero-404-mobile">
				<div>
					<img src={beaconImage} alt="Cashbac Beacon Image" className="illustration404-mobile"/>
				</div>
				<div className="has-text-centered-mobile">
					<h1 className="title">
					404
					</h1>
					<p className="subtitle">
					Ooops! <div></div> We can't find your page, <div></div>
					maybe you can find it in our homepage :)
					</p>
					<div className="button is-info is-rounded cta-business-mobile">
						<Link to="/">
							Back to Homepage
						</Link>
					</div>
				</div>
		</section>


	{/* DESKTOP AND TABLET HERO*/}

		<section className="section hero is-hidden-mobile" id="hero-404">
			<div>
				<div className="container">	
					<div>
						<img src={beaconImage} alt="Cashbac Beacon Image" className="illustration404"/>
					</div>

			
				<div className="has-text-left-desktop has-text-left-tablet">
					<div>
					<h1 className="title">
					404
					</h1>
					<p className="subtitle">
					Ooops! We can't find your page, <div></div>
					maybe you can find it in our homepage :)
					</p>
						<div className="button is-info is-rounded cta-business">
							<Link className="has-text-left-desktop" to="/">
								Back to Homepage
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		</section>
	</div>

);

export default Hero404;
