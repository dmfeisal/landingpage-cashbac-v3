import React from 'react';
import { Helmet } from "react-helmet";
import Navbar2 from '../components/navbar2';
import Footer from '../components/footer';
import Faqcomponent from '../components/faqcomponent';

const BusinessPage = ({ children }) => (
	<div>
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			<meta name="description" content="Cashbac is your personalized reward app. More than a discount, we offer you all the best deals in town. Discover all the best deals around you or find the best promos based on our recommendations." />
			<meta name="keywords" content="Cashbac earn instant Cashback, redeem cashback, Can I cash in my cashback to my bank account" />
			<title>Cashbac - Frequently asked question</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content="PT. Global Pay Indonesia" />
			<meta
				itemprop="description"
				content="Cashbac is your personalized reward app. More than a discount, we offer you all the best deals in town. Discover all the best deals around you or find the best promos based on our recommendations."
			/>
			<meta itemprop="image" content="https://dl.dropboxusercontent.com/s/yp5xezri84yv0bn/logo-cashbac.png" />
			<script type="text/javascript" src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
			<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
		</Helmet>
		<Navbar2 />
		<Faqcomponent />
		<Footer />
	</div>
);

export default BusinessPage;
