import React from 'react';
import './style.scss';
import 'bulma';
import bulmaCarousel from '../../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js';

const Header = ({ siteTitle }) => (
	<section>
		<div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
		  <div className='carousel-container'>
		    <div className='carousel-item has-background is-active'>
		      <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" width="640" height="310" />
		      <div className="title">Merry Christmas</div>
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
		      <div className="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank">La Song Box</a></div>
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
		      <div className="title">Sushi time</div>
		    </div>
		    <div className='carousel-item has-background'>
		      <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" width="640" height="310" />
		      <div className="title">Life</div>
		    </div>
		  </div>
		  <div className="carousel-navigation">
		    <div className="carousel-nav-left">
		      <i className="fa fa-chevron-left" aria-hidden="true">kiri</i>
		    </div>
		    <div className="carousel-nav-right">
		      <i className="fa fa-chevron-right" aria-hidden="true">kanan</i>
		    </div>
		  </div>
		</div>
	</section>

);

export default Header;
