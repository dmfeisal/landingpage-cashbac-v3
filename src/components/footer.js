import React from 'react';
// import Emoji from './emoji';
import { Link } from "gatsby";

const Footer = () => (
	<footer className="footer center">
		<div className="content container">
			<hr className="spacer is-4"></hr>
			<div className="columns is-desktop is-tablet">
				<div className="column">
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
					
				<div className="column">
					<b>Get Help</b>
					<article>
							
					</article>
					<article>
						<Link to="/faq" title="Find answer about cashbac on faq center" target="_blank" rel="noopener noreferrer">FAQ</Link>
					</article>
				</div>

				<div className="column">
					<b>Partnership with Us </b>
					<article>
						<Link to="/business" title="Join other merchant on Cashbac">Join As Merchant</Link>
					</article>
					<article>
						<a href="mailto:partnership@cashbac.com" title="Send inquiry and marketing partnership to partnership@cashbac.com">Marketing Partnership</a>
					</article>
				</div>
				
				<div className="column">
					<b>Follow Us</b>
					<article>
						<a href="https://www.instagram.com/cashbacapp/" title="Cashbac Instagram profile" target="_blank" rel="noopener noreferrer">Instagram</a>
					</article>
					<article>
						<a href="https://www.youtube.com/channel/UC9QEz3fWvpp1guO81L6ejBw" title="Cashbac Youtube channel" target="_blank" rel="noopener noreferrer">Youtube</a>
					</article>
					<article>
						<a href="https://www.facebook.com/cashbacapp/" tiele="Cashbac Facebook profile" target="_blank" rel="noopener noreferrer">Facebook</a>
					</article>
					<article>
						<a href="https://www.twitter.com/cashbacapp/" tiele="Cashbac twitter profile" target="_blank" rel="noopener noreferrer">Twitter</a>
					</article>
				</div>
			</div>
			<p>
				Copyright 2019 DMG.
			</p>
			<p>
				Cashbac is a free cashback app that pays you cash for everyday purchases. Ditch the coupons and get cash back the fun and easy ways. Cashbac has exclusive offer at your favorite merchants. No more searching around for offers, coupon or discount codes - find the best deals every time you shop with Cashbac
			</p>
			&nbsp;
			<p className="is-size-8">
				<Link to="/terms">Terms and Condition</Link>
				&nbsp; &nbsp; &nbsp; 
				<Link to="/privacy">Privacy Policy</Link>
			</p>
		<hr className="spacer is-1"></hr>
		</div>
	</footer>
);

export default Footer;
