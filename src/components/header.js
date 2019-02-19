import React from 'react';
import './style.scss';
import 'bulma';
import slider1 from '../images/slider/ff-slider.jpg';
import slider2 from '../images/slider/cc-slider.jpg';
import slider3 from '../images/slider/hs-slider.jpg';
import Navbar from './navbar';
import Carousel from 'bulma-carousel';


const Header = ({ siteTitle }) => (
	<section className="hero is-medium has-carousel">
		<div className="hero-body">
			<div class="hero-carousel carousel-animated carousel-animate-fade">
    			<div class='carousel-container'>
				      <div class='carousel-item has-background is-active'>
				        <img class="is-background" src={slider1} alt="" />
				      </div>
				      <div class='carousel-item has-background is-active'>
				        <img class="is-background" src={slider2} alt="" />
				      </div>
				      <div class='carousel-item has-background is-active'>
				        <img class="is-background" src={slider3} alt="" />
				      </div>
				    </div>
				    <div class="carousel-navigation is-overlay">
				      <div class="carousel-nav-left">
				        <i class="fa fa-chevron-left" aria-hidden="false">prev</i>
				      </div>
				      <div class="carousel-nav-right">
				        <i class="fa fa-chevron-right" aria-hidden="false">next</i>
				      </div>
				    </div>	
				</div>

		</div>
	</section>

);

export default Header;
