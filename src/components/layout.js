import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Hero from './hero';
import Features from '../components/features';
import Workstab from './workstab';
import Merchants from './merchants';
import Press from './press';
import Footer from './footer';


const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Hero />
		<Features />
		<Workstab />
		<Merchants />
		<Press />
		<Footer />
	</div>
);

export default Layout;
