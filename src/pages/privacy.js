import React from 'react';
import Helmet from '../components/helmet';
import Businessnavbar from '../components/businessnavbar';
import Privacycomponent from '../components/privacycomponent';
import Footer from '../components/footer';

const PrivacyPage = ({ children }) => (
	<div>
		<Helmet />
		<Businessnavbar />
		<privacycomponent />
		<Footer />
	</div>
);

export default PrivacyPage;
