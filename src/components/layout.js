import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Videos from './videos';
import Header from './header';
import Workstab2 from './workstab2';
import Merchants from './merchants';
import Downloadapp from './downloadapp';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Header />
		<Videos />
		<Workstab2 />
		<Merchants />
		<Downloadapp />
		<Footer />
	</div>
);

export default Layout;
