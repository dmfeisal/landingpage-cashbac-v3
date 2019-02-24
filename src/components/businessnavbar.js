import React from 'react';
import { Link } from 'gatsby';
import cashbacLogoWhite from '../images/cashbac-logo-white.png';

const Businessnavbar = () => (
  <section id="navbar-business">
    <nav className="navbar is-fixed-top is-transparent is-boxed" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" title="cashbac.com">
            <img src={cashbacLogoWhite} alt="Cashbac App"  />
          </Link>
          <div className="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      <div className="navbar-menu are-small">
        <div className="navbar-end">
            <div className="navbar-item is-tab">
                <a className="navbar-item" href="https://cashbac.com/blog/" title="Cashbac blog page">
                  BLOG
                </a>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                    <Link className="button is-primary is-small is-rounded" to="/" title="Cashbac for user #janganDipikirin">
                      CASHBAC FOR CONSUMER
                    </Link>
              </div>
            </div>
            </div>
        </div>
      </div>
    </nav>
  </section>
);

export default Businessnavbar;
