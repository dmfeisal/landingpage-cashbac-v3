import React from 'react';
import { Helmet } from "react-helmet";
import Navbar2 from '../components/navbar2';
import Privacycomponent from '../components/privacycomponent';
import Footer from '../components/footer';

const PrivacyPage = ({ children }) => (
	<div>
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			<meta name="description" content="Read our privacy policy to learn more about how your data is collected, used and protected by Cashbac" />
			<meta name="keywords" content="Cashbac privacy, Cashbac terms, Cashbac ketentuan" />
			<title>Privacy Policy | Cashbac App</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content="PT. Global Pay Indonesia" />
			<meta
				itemprop="description"
				content="Read our privacy policy to learn more about how your data is collected, used and protected by Cashbac"
			/>
			<meta itemprop="image" content="https://dl.dropboxusercontent.com/s/yp5xezri84yv0bn/logo-cashbac.png" />
			<script type="text/javascript" src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
			<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
		</Helmet>
		<Navbar2 />
		<Privacycomponent />
		<Footer />
	</div>
);

export default PrivacyPage;
