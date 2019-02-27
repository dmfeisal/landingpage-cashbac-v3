import React from 'react';
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import Termscomponent from '../components/termscomponent';
import Footer from '../components/footer';

const TermsPage = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Termscomponent />
		<Footer />
	</div>
);

export default TermsPage;
