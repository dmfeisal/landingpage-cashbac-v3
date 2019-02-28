import React from 'react';
import Helmet from '../../components/helmet';
import Navbar2 from '../../components/navbar2';
import Privacycomponent from '../../components/privacycomponent';
import Footer from '../../components/footer';

const PrivacyPage = ({ children }) => (
	<div>
		<Helmet />
		<Privacycomponent />
	</div>
);

export default PrivacyPage;
