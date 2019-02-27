import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Videos from './videos';
import Header from './header';
import Features from '../components/features';
import Workstab from './workstab';
import Merchants from './merchants';
import Downloadapp from './downloadapp';
import Footer from './footer';


const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Header />
		<Features />
		<Workstab />
		<Merchants />
		<Videos />
		<Downloadapp />
		<Footer />
	</div>
);

export default Layout;
