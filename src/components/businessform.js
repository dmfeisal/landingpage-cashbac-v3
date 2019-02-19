import React from 'react';
import './style.scss';

const Businessform = () => (
		<section className="section has-background-light" id="businessform">

			<div className="container is-centered box is-6 ">
				<div className="has-text-centered-desktop">
				<h1 className="title has-text-centered-desktop"> Love your business? </h1>
				<p className="has-text-centered-desktop">
				Cashbac is helping business across the country understand how their digital promotions are impacting offline sales.
				Let's connect and find out how we can help you.
				</p>
				</div>
				<br />
					<div class="field">
					  <label class="label">First Name</label>
					  <div class="control">
					    <input class="input" type="text" placeholder="e.g Jepri"/>
					  </div>
					</div>
					<div class="field">
					  <label class="label">Last Name</label>
					  <div class="control">
					    <input class="input" type="text" placeholder="e.g Sinaga"/>
					  </div>
					</div>

					<div class="field">
					  <label class="label">Email</label>
					  <div class="control">
					    <input class="input" type="email" placeholder="e.g. jeprisinaga@gmail.com"/>
					  </div>
					</div>
					<div class="field">
					  <label class="label">Phone Number</label>
					  <div class="control">
					    <input class="input" type="text" placeholder="e.g. 08118808802"/>
					  </div>
					</div>
					<div class="field">
					  <label class="label">Company Name</label>
					  <div class="control">
					    <input class="input" type="text" placeholder="e.g. PT Air Dive Alor"/>
					  </div>
					</div>
					<div class="field">
					  <label class="label">Company Address</label>
					  <div class="control">
					    <textarea class="textarea" placeholder="e.g. Jalan Timor no. 6 Gondangdia"/>
					  </div>
					</div>
					<div class="field">
					  <label class="label">Number of Outlets</label>
					  <div class="control">
					    <input class="input" type="number" placeholder="e.g. 1-10"/>
					  </div>
					</div>
					<div class="field">
					  <div class="control">
					    <label class="checkbox">
					      <input type="checkbox"/>
					      Sign up to receive our newsletter and exclusive resources. 
					    </label>
					  </div>
					</div>
					<div class="control has-text-centered">
					    <button class="button is-info is-rounded">Join Now</button>
					</div>
					
				</div>

		</section>

	);

export default Businessform;

