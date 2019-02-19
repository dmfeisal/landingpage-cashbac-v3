import React from 'react';
import './style.scss';

import cashbacLogoWhite from '../images/cashbac-logo-white.png';
import cashbacLogoColor from '../images/cashbac-logo-color.png';

const Businessnavbar = () => (
 <section id="navbar-business"> 
 <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://cashbac.com">
      <img src={cashbacLogoWhite} alt="Cashbac App"  />
    </a>
    <div class="navbar-burger burger" aria-label="menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="navbar-menu are-small">
    <div class="navbar-end">
        <div class="navbar-item is-primary is-tab">
          	<a class="navbar-item" href="https://cashbac.com/blog/" target="_blank">
          		BLOG
          	</a>
      	</div>
        <div class="navbar-item">
          <div class="buttons">
                <a class="button is-primary is-small is-rounded" href="/business" target="_blank">
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
