import React from 'react';
import { Helmet } from "react-helmet";

// import Layout from '../components/layout';
import Businessnavbar from '../components/businessnavbar';
import Businesshero from '../components/businesshero';
// import Quotes from '../components/quotes';
import Businessfeatures from '../components/businessfeatures';
import Featuredmerchants from '../components/featuredmerchants';
import Businessform from '../components/businessform';
import Footer from '../components/footer';

const BusinessPage = ({ children }) => (
	<div>
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			<meta name="description" content="Increase Traffic, Reach Goals. Generate Brand Awareness and Loyalty with Cashbac Business – The Marketing Platform Made for You and Your Customers." />
			<meta name="keywords" content="Merchant, marketing tools, cashbac apps, cashback tools, cashbac marketing tools, Cashbac business" />
			<title>Transform How You Do Business | Cashbac Business</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content="PT. Global Pay Indonesia" />
			<meta
				itemprop="description"
				content="Increase Traffic, Reach Goals. Generate Brand Awareness and Loyalty with Cashbac Business – The Marketing Platform Made for You and Your Customers."
			/>
			<meta itemprop="image" content="https://dl.dropboxusercontent.com/s/yp5xezri84yv0bn/logo-cashbac.png" />
			<script type="text/javascript" src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
			<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
		</Helmet>
		<Businessnavbar />
		<Businesshero />
		<Featuredmerchants />
		<Businessfeatures />
		
		<Businessform />
		<Footer />
	</div>
);

export default BusinessPage;
