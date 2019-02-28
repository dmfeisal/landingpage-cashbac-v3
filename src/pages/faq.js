import React from 'react';
import Helmet from '../components/helmet';
import Navbar2 from '../components/navbar2';
import Footer from '../components/footer';
import Faqcomponent from '../components/faqcomponent';

const BusinessPage = ({ children }) => (
	<div>
		<Helmet />
		<Navbar2 />
		<Faqcomponent />
		<Footer />
	</div>
);

export default BusinessPage;
