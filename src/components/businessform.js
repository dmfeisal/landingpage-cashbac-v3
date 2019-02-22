import React from 'react';

const Businessform = () => (
		<section className="section has-text-centered has-background-light" id="businessform">

	{/*VIEW ON DESTOP AND TAB*/}
			<div className="container box is-6 is-hidden-mobile">
				<div className="has-text-centered-desktop">
				<h1 className="title "> Love your business? </h1>
				<p className="has-text-centered-desktop">
				Cashbac is helping business across the country understand how their digital promotions are impacting offline sales.
				Let's connect and find out how we can help you.
				</p>
				</div>
				<br />
					<div className="field">
					  <label className="label">First Name</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g Jepri"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Last Name</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g Sinaga"/>
					  </div>
					</div>

					<div className="field">
					  <label className="label">Email</label>
					  <div className="control">
					    <input className="input" type="email" placeholder="e.g. jeprisinaga@gmail.com"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Phone Number</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g. 08118808802"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Company Name</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g. PT Air Dive Alor"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Company Address</label>
					  <div className="control">
					    <textarea className="textarea" placeholder="e.g. Jalan Timor no. 6 Gondangdia"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Number of Outlets</label>
					  <div className="control">
					    <input className="input" type="number" placeholder="e.g. 1-10"/>
					  </div>
					</div>
					<div className="field">
					  <div className="control">
					    <label className="checkbox">
					      <input type="checkbox"/>
					      Sign up to receive our newsletter and exclusive resources. 
					    </label>
					  </div>
					</div>
					<div className="control has-text-centered">
					    <button className="button is-info is-rounded">Join Now</button>
					</div>
					
				</div>

			{/*VIEW ON MOBILE*/}
				<div className="container is-6 is-hidden-desktop is-hidden-tablet">
				<div className="has-text-centered-desktop">
				<h1 className="title "> Love your business? </h1>
				<p className="has-text-centered-desktop">
				Cashbac is helping business across the country understand how their digital promotions are impacting offline sales.
				Let's connect and find out how we can help you.
				</p>
				</div>
				<br />
					<div className="field">
					  <label className="label">First Name</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g Jepri"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Last Name</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g Sinaga"/>
					  </div>
					</div>

					<div className="field">
					  <label className="label">Email</label>
					  <div className="control">
					    <input className="input" type="email" placeholder="e.g. jeprisinaga@gmail.com"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Phone Number</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g. 08118808802"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Company Name</label>
					  <div className="control">
					    <input className="input" type="text" placeholder="e.g. PT Air Dive Alor"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Company Address</label>
					  <div className="control">
					    <textarea className="textarea" placeholder="e.g. Jalan Timor no. 6 Gondangdia"/>
					  </div>
					</div>
					<div className="field">
					  <label className="label">Number of Outlets</label>
					  <div className="control">
					    <input className="input" type="number" placeholder="e.g. 1-10"/>
					  </div>
					</div>
					<div className="field">
					  <div className="control">
					    <label className="checkbox">
					      <input type="checkbox"/>
					      Sign up to receive our newsletter and exclusive resources. 
					    </label>
					  </div>
					</div>
					<div className="control has-text-centered">
					    <button className="button is-info is-rounded">Join Now</button>
					</div>
					
				</div>

		</section>

	);

export default Businessform;

