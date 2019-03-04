import React from 'react';
import Helmet from './helmet';
import Navbar from './navbar';
import Videos from './videos';
import Hero from './hero';
import Features from '../components/features';
import Workstab from './workstab';
import Merchants from './merchants';
import Slider from './slider';
import Footer from './footer';


const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar />
		<Hero />
		<Features />
		<Workstab />
		<Merchants />
		<Videos />
		<Slider />
		<Footer />
	</div>
);

export default Layout;
