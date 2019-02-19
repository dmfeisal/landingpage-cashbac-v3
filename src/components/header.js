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
			<div className="hero-carousel carousel-animated carousel-animate-fade">
    			<div className='carousel-container'>
				      <div className='carousel-item has-background is-active'>
				        <img className="is-background" src={slider1} alt="" />
				      </div>
				      <div className='carousel-item has-background is-active'>
				        <img className="is-background" src={slider2} alt="" />
				      </div>
				      <div className='carousel-item has-background is-active'>
				        <img className="is-background" src={slider3} alt="" />
				      </div>
				    </div>
				</div>

		</div>
	</section>

);

export default Header;
