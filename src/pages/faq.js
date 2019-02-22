import React from 'react';
import Layout from '../components/layout';
import Helmet from '../components/helmet';
import Businessnavbar from '../components/businessnavbar';
import Businesshero from '../components/businesshero';
import Quotes from '../components/quotes';
import Businessfeatures from '../components/businessfeatures';
import Featuredmerchants from '../components/featuredmerchants';
import Businessform from '../components/Businessform';
import Footer from '../components/footer';
import Faqcomponent from '../components/faqcomponent';

const BusinessPage = ({ children }) => (
	<div>
		<Helmet />
		<Businessnavbar />
		<Businesshero />
		<Faqcomponent />
		<Footer />
	</div>
);

export default BusinessPage;
