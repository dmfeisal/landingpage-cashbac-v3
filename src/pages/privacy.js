import React from 'react';
import { Helmet } from "react-helmet";
import Navbar2 from '../components/navbar2';
import Privacycomponent from '../components/privacycomponent';
import Footer from '../components/footer';

const PrivacyPage = ({ children }) => (
	<div>
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
			<meta name="description" content="Cashbac menetapkan Kebijakan Privasi ini untuk membantu User membuat keputusan yang jelas tentang apakah User tidak menggunakan atau tetap menggunakan Cashbac" />
			<meta name="keywords" content="Cashbac privacy, Cashbac terms, Cashbac ketentuan" />
			<title>Cashbac - Kebijakan privasi penggunaan cashbac</title>
			<html lang="en" />
			{/* Google / Search Engine Meta Tags */}
			<meta itemprop="name" content="PT. Global Pay Indonesia" />
			<meta
				itemprop="description"
				content="Cashbac menetapkan Kebijakan Privasi ini untuk membantu User membuat keputusan yang jelas tentang apakah User tidak menggunakan atau tetap menggunakan Cashbac"
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
