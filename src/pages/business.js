import React from 'react';
// import Layout from '../components/layout';
import Helmet from '../components/helmet';
import Businessnavbar from '../components/businessnavbar';
import Businesshero from '../components/businesshero';
import Quotes from '../components/quotes';
import Businessfeatures from '../components/businessfeatures';
import Featuredmerchants from '../components/featuredmerchants';
import Businessform from '../components/businessform';
import Footer from '../components/footer';

const BusinessPage = ({ children }) => (
	<div>
		<Helmet />
		<Businessnavbar />
		<Businesshero />
		<Featuredmerchants />
		<Businessfeatures />
		<Quotes />
		<Businessform />
		<Footer />
	</div>
);

export default BusinessPage;
