import React from 'react';
import './style.scss';

import cashbacLogoWhite from '../images/cashbac-logo-white.png';
import cashbacLogoColor from '../images/cashbac-logo-color.png';

const Businessnavbar = () => (
 <section id="navbar-business"> 
 <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://cashbac.com">
      <img src={cashbacLogoWhite} alt="Cashbac App"  />
    </a>
    <div className="navbar-burger burger" aria-label="menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div className="navbar-menu are-small">
    <div className="navbar-end">
        <div className="navbar-item is-primary is-tab">
          	<a className="navbar-item" href="https://cashbac.com/blog/" target="_blank">
          		BLOG
          	</a>
      	</div>
        <div className="navbar-item">
          <div className="buttons">
                <a className="button is-primary is-small is-rounded" href="/business" target="_blank">
                  CASHBAC FOR CONSUMER
                </a>
          </div>
        </div>
        </div>
    </div>
  </nav>

</section>

);

export default Businessnavbar;
