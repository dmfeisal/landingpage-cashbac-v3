import React from 'react';
import { Helmet } from "react-helmet";
import Navbar2 from '../components/navbar2';
import Hero404 from '../components/hero404';
import Footer from '../components/footer';

const NotFoundPage = () => (
	<div>
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			<meta name="description" content="Learn more about the terms and conditions of Cashbac application including how to register, link your card, make transactions and earn cashback rewards" />
			<meta name="keywords" content="404 Page. Your page not found" />
			<title>404 Page Not Found | Cashbac App</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content="PT. Global Pay Indonesia" />
			<meta
				itemprop="description"
				content="404 Page Not Found"
			/>
			<meta itemprop="image" content="https://dl.dropboxusercontent.com/s/yp5xezri84yv0bn/logo-cashbac.png" />
			<script type="text/javascript" src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
			<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
		</Helmet>
		<Navbar2 />
		<Hero404 />
		<Footer />

	</div>
);

export default NotFoundPage
