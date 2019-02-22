import React from 'react';
import { Link } from 'gatsby';
import cashbacLogoWhite from '../images/cashbac-logo-white.png';

const Businessnavbar = () => (
  <div className="container"> 
 <section id="navbar-business">
 <nav className="navbar is-fixed-top is-transparent is-boxed" role="navigation" aria-label="main navigation">
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
        <div className="navbar-item is-tab">
            <a className="navbar-item" href="https://cashbac.com/blog/" target="_blank">
              BLOG
            </a>
        </div>
        <div className="navbar-item">
          <div className="buttons">
                <Link className="button is-primary is-small is-rounded" to="#" target="_blank">
                  CASHBAC FOR CONSUMER
                </Link>
          </div>
        </div>
        </div>
    </div>
  </nav>

</section>
</div>
);

export default Businessnavbar;
