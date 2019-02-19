import React from 'react';
import './style.scss';

import cashbacLogoWhite from '../images/cashbac-logo-white.png';
import cashbacLogoColor from '../images/cashbac-logo-color.png';

const Navbar = () => (
 <section id="navbar">
 <navbar/>
 
 <nav class="navbar is-fixed-top is-white has-shadow is-boxed" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://cashbac.com">
      <img src={cashbacLogoColor} alt="Cashbac App"  />
    </a>
    <div class="navbar-burger burger" aria-label="menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu are-small">
    <div class="navbar-end">
      	<div class="navbar-item is-tab">
          	<a class="navbar-item" href="#works">
          		HOW IT WORKS
          	</a>
      	</div>
        <div class="navbar-item is-tab">
        	<a class="navbar-item" href="#merchants">
         		 MERCHANTS
        	</a>
        	</div>
        <div class="navbar-item is-tab">
          	<a class="navbar-item" href="https://cashbac.com/blog/" target="_blank">
          		BLOG
          	</a>
      	</div>
        <div class="navbar-item">
          <div class="buttons">
                <a class="button is-info is-small is-rounded" href="/business" target="_blank">
                  CASHBAC FOR BUSINESS
                </a>
          </div>
        </div>
        </div>
    </div>
  </nav>

</section>

);

export default Navbar;
