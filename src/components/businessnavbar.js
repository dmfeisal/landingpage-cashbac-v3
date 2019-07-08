import React from 'react';
import { Link } from 'gatsby';
import cashbacLogoWhite from '../images/cashbac-logo-white.png';

class Businessnavbar extends React.Component {
  handleClick (e) {
		e.preventDefault()
    let nav = e.currentTarget
    let target = document.getElementById(nav.getAttribute('data-target')) 
    console.log(target)
    if (nav && target) {
			nav.classList.toggle('is-active')
			target.classList.toggle('is-active')
		}
	}
  render() {
    return (
      <section id="navbar-business">
        <nav className="navbar is-fixed-top is-transparent is-boxed" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/" title="cashbac.com">
                <img src={cashbacLogoWhite} alt="Cashbac App"  />
              </Link>
              <a href="#nav" role="button" onClick={e => { this.handleClick(e) } } className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="cb-navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

          <div id="cb-navbar" className="navbar-menu are-small">
            <div className="navbar-end">
                <div className="navbar-item">
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
    )
  }
}

export default Businessnavbar;
