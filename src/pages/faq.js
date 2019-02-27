import React from 'react';
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Faqcomponent from '../components/faqcomponent';

const BusinessPage = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Faqcomponent />
		<Footer />
	</div>
);

export default BusinessPage;
