import React from 'react';
import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import Privacycomponent from '../components/privacycomponent';
import Footer from '../components/footer';

const PrivacyPage = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Privacycomponent />
		<Footer />
	</div>
);

export default PrivacyPage;
