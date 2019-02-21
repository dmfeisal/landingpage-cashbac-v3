import React from 'react';
import Emoji from './emoji';
import { Link } from "gatsby";

const Footer = () => (
	<footer className="footer center">
		<div className="content container">
			<div className="columns is-desktop is-tablet">
				<div className="column">
					<b>About </b>
					<article>
						<a href="#">Company</a>
					</article>
					<article>
						<a href="#">Careers</a>
					</article>
					<article>
						<a href="#">Blog</a>
					</article>
				</div>
					
				<div className="column">
					<b>Get Help</b>
					<article>
						<a href="#">Help Center</a>
					</article>
					<article>
						<a href="#">FAQ</a>
					</article>
				</div>

				<div className="column">
					<b>Partnership with Us </b>
					<article>
						<a href="#">Join As Merchant</a>
					</article>
					<article>
						<a href="#">Marketing Partnership</a>
					</article>
				</div>
				
				<div className="column">
					<b>Follow Us</b>
					<article>
						<a href="#">Instagram</a>
					</article>
					<article>
						<a href="#">Youtube</a>
					</article>
					<article>
						<a href="#">Facebook</a>
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
		</div>
	</footer>
);

export default Footer;
