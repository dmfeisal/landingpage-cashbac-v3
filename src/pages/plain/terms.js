import React from 'react';
import Helmet from '../../components/helmet';
import Navbar2 from '../../components/navbar2';
import Termscomponent from '../../components/termscomponent';
import Footer from '../../components/footer';

const TermsPage = ({ children }) => (
	<div>
		<Helmet />
		<Termscomponent />
	</div>
);

export default TermsPage;
