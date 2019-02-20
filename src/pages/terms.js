import React from 'react';
import '../components/style.scss';
import Helmet from '../components/helmet';
import Businessnavbar from '../components/businessnavbar';
import Termscomponent from '../components/Termscomponent';
import Footer from '../components/footer';

const TermsPage = ({ children }) => (
	<div>
		<Helmet />
		<Businessnavbar />
		<Termscomponent />
		<Footer />
	</div>
);

export default TermsPage;
