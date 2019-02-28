import React from 'react';
import { Link } from 'gatsby';
import cashbacLogoColor from '../images/cashbac-logo-color.png';

const Navbar2 = () => (
  <section id="navbar">
    <nav className="navbar is-fixed-top is-white has-shadow is-boxed" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" title="cashbac.com">
            <img src={cashbacLogoColor} alt="Cashbac App"  />
          </Link>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="cb-navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="cb-navbar" className="navbar-menu are-small">
          <div className="navbar-end">
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
      </div>
    </nav>
  </section>
);

export default Navbar2;
