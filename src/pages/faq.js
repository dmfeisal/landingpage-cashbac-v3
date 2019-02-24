import React from 'react';
import Helmet from '../components/helmet';
import Businessnavbar from '../components/businessnavbar';
import Businesshero from '../components/businesshero';
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
