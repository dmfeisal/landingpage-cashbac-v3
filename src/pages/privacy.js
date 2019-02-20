import React from 'react';
import '../components/style.scss';
import Helmet from '../components/helmet';
import Businessnavbar from '../components/businessnavbar';
import Privacycomponent from '../components/Privacycomponent';
import Footer from '../components/footer';

const PrivacyPage = ({ children }) => (
	<div>
		<Helmet />
		<Businessnavbar />
		<Privacycomponent />
		<Footer />
	</div>
);

export default PrivacyPage;
