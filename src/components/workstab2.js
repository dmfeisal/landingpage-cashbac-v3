
/* eslint-disable */
import React from 'react';
import signupMockup from '../images/mockup/sign-up@2x.png';
import linkcardMockup from '../images/mockup/link-card@2x.png';
import enterpinMockup from '../images/mockup/enter-pin@2x.png';
import exploreMockup from '../images/mockup/explore@2x.png';
import taptopayMockup from '../images/mockup/tap-to-pay@2x.png';
import getcashbackMockup from '../images/mockup/get-cashback@2x.png';

import Emoji from './emoji';

const Workstab2 = () => (
	<div>
		<section id="works" className="section is-platform is-medium">
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-12 is-10-fullhd">
						<div className="columns">
							<div className="column is-6">
								<div className="section-header">
									<h2 className="title is-4 is-spaced">How Cashbac Works</h2>
									<p className="subtitle is-6">With our simple and easy-to-use app, you can now enjoy instant cashback anywhere and anytime.</p>
								<hr className="spacer is-1"></hr>
								</div>
								
								<div className="section-body">
									<div className="vertical-tabs">
				                        <a className="tab is-active" data-anchor="step#download" href="#">
				                           <h3 className="title is-6"> Download and Sign Up </h3>
				                           <p className="subtitle is-6"> Explore exciting Storyworlds in every imaginable genre for storytellers, readers and listeners from young to old. </p>
				                        </a>
				                        <a className="tab" data-anchor="step#explore" href="#">
				                           <h3 className="title is-6"> Explore and find the best deals! </h3>
				                           <p className="subtitle is-6"> Storyworlds are growing collections of thematically-related stories written by authors from around the world. </p>
				                        </a>
				                        <a className="tab" data-anchor="step#linkcard" href="#">
				                           <h3 className="title is-6"> Link your Card </h3>
				                           <p className="subtitle is-6"> Join the Storytelling School for families to learn important storytelling techniques. </p>
				                        </a>
				                        <a className="tab" data-anchor="step#enterpin" href="#">
				                           <h3 className="title is-6"> Enter your Pin </h3>
				                           <p className="subtitle is-6"> Once you are ready to pay in front of Cashier, enter your PIN to secure your payment. </p>
				                        </a>
				                      	<a className="tab" data-anchor="step#tap" href="#">
				                           <h3 className="title is-6"> Tap to Pay or Scan QR </h3>
				                           <p className="subtitle is-6"> Ask the cashier for the available payment options at the store. You can tap your smartphone to our Cashbac reader or scan QR code for payment. </p>
				                        </a>
				                        <a className="tab" data-anchor="step#getcashback" href="#">
				                           <h3 className="title is-6"> Get Cashback </h3>
				                           <p className="subtitle is-6"> Once transaction is done, you will instantly get your cashback reward. Redeem the cashback you earned for your next transaction. </p>
				                        </a>
				                        


				                     </div>
									<hr className="spacer is-1"></hr>
									</div>
								</div>

								<div className="column is-6 align-self-stretch">
									<div className="section-media">
										<div className="screens">
											<div className="screen is-active" data-source="step#download" href="#">
												<img role="presentation" src={signupMockup} />
											</div>
											<div className="screen" data-source="step#explore" href="#">
												<img role="presentation" src={exploreMockup} />
											</div>
											<div className="screen" data-source="step#linkcard" href="#">
												<img role="presentation" src={linkcardMockup} />
											</div>
											<div className="screen" data-source="step#enterpin" href="#">
												<img role="presentation" src={enterpinMockup} />
											</div>
											<div className="screen" data-source="step#tap" href="#">
												<img role="presentation" src={taptopayMockup} />
											</div>
											<div className="screen" data-source="step#getcashback" href="#">
												<img role="presentation" src={getcashbackMockup} />
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>



	</div>
);

export default Workstab2;
