import React from 'react';
import './style.scss';
import 'bulma';
import heroBusiness from '../images/slider/cashbac-business-hero.png';
import Navbar from './navbar';
import Carousel from 'bulma-carousel';


const Businesshero = ({ siteTitle }) => (
	<section className="hero is-medium has-carousel" id="business-hero">
		<div className="ccontainer hero-body">
			<div class="hero-carousel carousel-animated carousel-animate-fade">


			</div>
						<div class="container" id="hero-text">
				      		<h1 class="title">
				      		It’s easy to drive your business
				      		</h1>
				      		<p class="subtitle">Cashbac business is an online marketing platform to help you attract a new customer, drive more sales and give an impact on your business
				      		</p>

				      		<div class="button is-info is-rounded">Learn More</div>
				      	</div>
		</div>
	</section>
);

export default Businesshero;
