import React from 'react';
import { Link } from 'gatsby';

import cashbacLogoWhite from '../images/cashbac-logo-white.png';
import cashbacLogoColor from '../images/cashbac-logo-color.png';

const Navbar = () => (
 <section id="navbar">
 <nav className="navbar is-fixed-top is-white has-shadow is-boxed" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://cashbac.com">
      <img src={cashbacLogoColor} alt="Cashbac App"  />
    </a>
    <div className="navbar-burger burger" aria-label="menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div className="navbar-menu are-small">
    <div className="navbar-end">
      	<div className="navbar-item is-tab">
          	<a className="navbar-item" href="#works">
          		HOW IT WORKS
          	</a>
      	</div>
        <div className="navbar-item is-tab">
        	<a className="navbar-item" href="#merchants">
         		 MERCHANTS
        	</a>
        	</div>
        <div className="navbar-item is-tab">
          	<a className="navbar-item" href="https://cashbac.com/blog/" target="_blank">
          		BLOG
          	</a>
      	</div>
        <div className="navbar-item">
          <div className="buttons">
                <Link className="button is-info is-small is-rounded" to="/business" target="_blank">
                  CASHBAC FOR BUSINESS
                </Link>
          </div>
        </div>
        </div>
    </div>
  </nav>

</section>

);

export default Navbar;
