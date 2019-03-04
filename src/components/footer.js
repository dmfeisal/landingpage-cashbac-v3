import React from 'react';
// import Emoji from './emoji';
import { Link } from "gatsby";
import cashbacLogoColor from '../images/cashbac-logo-color.png';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import buttonGooglePlay from '../images/google_badge_en_get.svg';
import buttonAppStore from '../images/appstore_badge_en.svg';

const Footer = () => (
	<footer className="footer center" id="footer">
		<div className="content container">
			<hr className="spacer is-2"></hr>
			<div className="columns is-multiline is-desktop">
				<div className="column is-12-mobile is-4-desktop is-12-tablet">
					<Link to="/" title="cashbac.com">
		                <img className="cashbac-logo-footer" src={cashbacLogoColor} alt="Cashbac App"  />
		            </Link>

					<p>
						Cashbac is a free mobile app that gives you instant cashback for every transaction at your favorite merchants.
					</p>
					<a href="https://cashbac.onelink.me/1sXQ/homepage">
					<img width="140Px" src={buttonGooglePlay} alt="Get On Google Play" />
					</a>
					&nbsp; &nbsp;
					<a href="https://cashbac.onelink.me/1sXQ/homepage">
					<img width="140	px" src={buttonAppStore} alt="Get On App Store" />
					</a>
				</div>

				<div className="column is-6-mobile is-1-desktop is-3-tablet">
					<b>About </b>
					<article>
						<a href="https://www.linkedin.com/company/13423684/" title="Cashbac Company Page">Company</a>
					</article>
					<article>
						<a href="mailto:recruitment@cashbac.com" title="Email your cv to recruitment@cashbac.com">Careers</a>
					</article>
					<article>
						<a href="https://cashbac.com/blog/" title="Cashbac Blog Page" target="_blank" rel="noopener noreferrer">Blog</a>
					</article>
				</div>

				<div className="column is-6-mobile is-2-desktop is-3-tablet">
					<b>Partnership with Us </b>
					<article>
						<Link to="/business" title="Join other merchant on Cashbac">Join As Merchant</Link>
					</article>
					<article>
						<a href="mailto:partnership@cashbac.com" title="Send inquiry and marketing partnership to partnership@cashbac.com">Marketing Partnership</a>
					</article>
				</div>
					
				<div className="column is-6-mobile is-2-desktop is-3-tablet">

					<b>Follow Us</b>
					<article>
						<a href="https://www.instagram.com/cashbacapp/" title="Cashbac Instagram profile" target="_blank" rel="noopener noreferrer">
							<FaInstagram className="icon-footer"/>
						</a>
					
						<a href="https://www.youtube.com/channel/UC9QEz3fWvpp1guO81L6ejBw" title="Cashbac Youtube channel" target="_blank" rel="noopener noreferrer">
							<FaYoutube className="icon-footer"/>
						</a>
						<a href="https://www.facebook.com/cashbacapp/" tiele="Cashbac Facebook profile" target="_blank" rel="noopener noreferrer">
							<FaFacebook className="icon-footer"/>
						</a>
						<a href="https://www.twitter.com/cashbacapp/" tiele="Cashbac twitter profile" target="_blank" rel="noopener noreferrer">
							<FaTwitter className="icon-footer"/>
						</a>
					</article>
				</div>
			</div>

			<hr className="spacer is-1"></hr>
			
			<div className="columns is-size-8">
				<div  className="column">
					<p> &copy; 2019 PT GlobalPay Indonesia.
						&nbsp; &nbsp; &nbsp;
						<Link to="/terms">Terms and Condition</Link>
						&nbsp; &nbsp; &nbsp; 
						<Link to="/privacy">Privacy Policy</Link>
						&nbsp; &nbsp; &nbsp;
						<Link to="/faq" title="Find answer about cashbac on faq center" target="_blank" rel="noopener noreferrer">FAQ</Link>
					</p>
				</div>

			</div>
		<hr className="spacer is-1"></hr>
		</div>
	</footer>
);

export default Footer;
