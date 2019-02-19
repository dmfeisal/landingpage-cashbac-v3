import React from 'react';
import './style.scss';
import buttonGooglePlay from '../images/google_badge_en_get.svg';
import buttonAppStore from '../images/appstore_badge_en.svg';

const Downloadapp = () => (

		<div class="gradientBg">
		<section className="section container">
		<div>
			<div class="columns ">
				<div class="column center is-6 container">
			
					<h2 className="title has-text-centered-mobile has-text-white">Start earning millions with Cashbac 
					
					</h2>
				</div>
				<div  class="column center">
					<a href="https://d9fe2.app.goo.gl/kCdB">
					<img width="153px" height="45px" src={buttonGooglePlay} alt="Get On Google Play" />
					</a>
					&nbsp; &nbsp;
					<a href="https://d9fe2.app.goo.gl/kCdB">
					<img width="153px" height="45px" src={buttonAppStore} alt="Get On App Store" />
					</a>
				</div>	
				</div>
			</div>
		</section>
	</div>

	);

export default Downloadapp;
