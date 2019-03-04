import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

// import bulmaCarousel from 'bulma-carousel'

const Slider = ({ siteTitle }) => (
	<section>

{/* SLIDER ON DESKTOP VIEW*/}

		<div className='carousel carousel-animated carousel-animate-slide is-hidden-mobile' data-autoplay="true">
		  <div className='carousel-container'>
		    <div className='carousel-item has-background is-active'>
		      <img className="is-background" src="https://i.postimg.cc/Nf92C15G/banner-campaign-jangandipikirin-hairstyle.png" alt="Makan sampai Lupa Daratan #JanganDipikirin pasti dapat #cashbac" />
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://i.postimg.cc/Nf92C15G/banner-campaign-jangandipikirin-hairstyle.png" alt="Pakai kartu yang mana aja #JanganDipikirin pasti dapat #cashbac" />
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://i.postimg.cc/Nf92C15G/banner-campaign-jangandipikirin-hairstyle.png" alt="Ganti rambut tiap hari #JanganDipikirn pasti dapat #cashbac" />
		    </div>
		  </div>
		  <div className="carousel-navigation is-overlay">
		    <div className="carousel-nav-left">
		      	<span className="icon">
					<FaAngleLeft className="icon-carousel" />
				</span>
		    </div>
		    <div className="carousel-nav-right">
		    	<span className="icon">
					<FaAngleRight className="icon-carousel"/>
				</span>
		    </div>
		  </div>
		</div>
	
	{/* SLIDER ON MOBILE VIEW*/}

		<div className="carousel carousel-animated carousel-animate-slide is-hidden-desktop is-hidden-tablet" data-autoplay="true">
		  <div className='carousel-container'>
		    <div className='carousel-item has-background is-active'>
		      <img className="is-background" src="https://i.postimg.cc/rMVCwdQQ/french-fries-banner-mobile.jpg" alt="Makan sampai Lupa Daratan #JanganDipikirin pasti dapat #cashbac" />
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://i.postimg.cc/Gr1x6gY0/credit-card-banner-mobile.jpg" alt="Pakai kartu yang mana aja #JanganDipikirin pasti dapat #cashbac" />
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://i.postimg.cc/TGqJxjqK/hair-styles-banner-mobile.jpg" alt="Ganti rambut tiap hari #JanganDipikirn pasti dapat #cashbac" />
		    </div>
		  </div>
		  <div className="carousel-navigation is-overlay">
		    <div className="carousel-nav-left">
		      	<span className="icon">
					<FaAngleLeft />
				</span>
		    </div>
		    <div className="carousel-nav-right">
		    	<span className="icon">
					<FaAngleRight />
				</span>
		    </div>
		  </div>
		</div>
	</section>


);

export default Slider;
