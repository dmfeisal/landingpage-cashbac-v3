import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

// import bulmaCarousel from 'bulma-carousel'

const Header = ({ siteTitle }) => (
	<section>
		<div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
		  <div className='carousel-container'>
		    <div className='carousel-item has-background is-active'>
		      <img className="is-background" src="https://i.postimg.cc/Fh1y0MtS/french-fries-banner-web.jpg" alt="Makan sampai Lupa Daratan #JanganDipikirin pasti dapat #cashbac" />
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://i.postimg.cc/nn5v23ZP/credit-card-banner-web.jpg" alt="Pakai kartu yang mana aja #JanganDipikirin pasti dapat #cashbac" />
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://i.postimg.cc/8NZdJ1YD/hair-styles-banner-web.jpg" alt="Ganti rambut tiap hari #JanganDipikirn pasti dapat #cashbac" />
		    </div>
		  </div>
		  <div className="carousel-navigation is-overlay">
		    <div className="carousel-nav-left">
		      	<span className="icon">
					<FaAngleLeft size="fa-2x" />
				</span>
		    </div>
		    <div className="carousel-nav-right">
		    	<span className="icon">
					<FaAngleRight size="fa-2x" />
				</span>
		    </div>
		  </div>
		</div>
	</section>
);

export default Header;
