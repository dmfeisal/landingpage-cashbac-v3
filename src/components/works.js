
/* eslint-disable */
import React from 'react';
import signupMockup from '../images/mockup/sign-up@2x.png';
import linkcardMockup from '../images/mockup/link-card@2x.png';
import enterpinMockup from '../images/mockup/enter-pin@2x.png';
import exploreMockup from '../images/mockup/explore@2x.png';
import taptopayMockup from '../images/mockup/tap-to-pay@2x.png';
import getcashbackMockup from '../images/mockup/get-cashback@2x.png';

import Emoji from './emoji';

const Works = () => (
	<div>
		<section className="section has-background-light" id="works">
			<div className="container">

			<h1 className="title has-text-centered-mobile has-text-centered-desktop "> How Cashbac Works </h1>
			<br />
			<p className="subtitle has-text-centered-mobile has-text-centered-desktop">
			With our simple and easy-to-use app, you can now enjoy instant cashback anywhere and anytime
			</p>
				
				<div className="container is-centered">
					<div className="tabs is-toggle">
					  <ul>
					    <li>
					      <a href="#signup">
					        <span>Download and Sign Up</span>
					      </a>
					    </li>
					    <li>
					        <a href="#link-card">
					        <span>Link Your Card</span>
					      </a>
					    </li>
					    <li>
					        <a href="#explore">
					        <span>Explore and find the best deals!</span>
					      </a>
					    </li>
					    <li>
					        <a href="#tap">
					        <span>Tap to Pay or Scan QR</span>
					      </a>
					    </li>
					    <li>
					      <a href="#pay">
					        <span>Explore and find the best deals!</span>
					      </a>
					    </li>
					    <li>
					      <a href="#cashback">
					        <span>Get Instant Cashback!</span>
					      </a>
					    </li>
					  </ul>
					</div>

				</div>


				<div className="columns is-multiline ">
					<div className="column is-one-third">
						<article className="media">
							
							<div className="media-content">
								<div className="content">

								<figure className="media-top">
									<span className="is-medium">
										<img alt="How to use Cashbac" width="200px" src={signupMockup} />
									</span>
								</figure>
									<h1 className="title is-size-4 has-text-centered">DOWNLOAD AND SIGN UP</h1>
									<p className="subtitle is-size-5 has-text-centered">
										Download from App Store or Google Play, register using email or use Facebook/Google for faster signup.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							
							<div className="media-content">
								<div className="content">
									<figure className="media-top">
										<span className="is-medium">
											<img alt="How to use Cashbac" width="200px" src={linkcardMockup} />
										</span>
									</figure>
									<h1 className="title is-size-4 has-text-centered">LINK YOUR CARD</h1>
									<p className="subtitle is-size-5 has-text-centered">
										Link your credit or debit card and secure it with PIN and security questions.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<div className="media-content">
								<div className="content">
									<figure className="media-top">
										<span className="is-medium">
											<img alt="How to use Cashbac" width="200px" src={exploreMockup} />
										</span>
									</figure>
							
									<h1 className="title is-size-4 has-text-centered">EXPLORE & FIND THE BEST DEAL</h1>
									<p className="subtitle is-size-5 has-text-centered">
										Explore and find Cashback deal around you and go to that restaurant or store to earn your cashback reward.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							
							<div className="media-content">
								<div className="content">
									<figure className="media-top">
										<span className="is-medium">
											<img alt="How to use Cashbac" width="200px" src={enterpinMockup} />
										</span>
									</figure>
									<h1 className="title is-size-4 has-text-centered">ENTER YOUR PIN</h1>
									<p className="subtitle is-size-5 has-text-centered">
										Once you are ready to pay in front of Cashier, enter your PIN to secure your payment.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							
							<div className="media-content">

								<div className="content">
									<figure className="media-top">
										<span className="is-medium">
											<img alt="How to use Cashbac" width="200px" src={taptopayMockup} />
										</span>
							</figure>
									<h1 className="title is-size-4 has-text-centered">TAP TO PAY OR SCAN QR</h1>
									<p className="subtitle is-size-5 has-text-centered">
										Ask the cashier for the available payment options at the store. You can tap your smartphone to our Cashbac reader or scan QR code for payment.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<div className="media-content">
								<div className="content">
									<figure className="media-top">
										<span className="is-medium">
											<img alt="How to use Cashbac" width="200px" src={getcashbackMockup} />
										</span>
									</figure>
									<h1 className="title is-size-4 has-text-centered">GET INSTANT CASHBACK</h1>
									<p className="subtitle is-size-5 has-text-centered">
										Once transaction is done, you will instantly get your cashback reward. Redeem the cashback you earned for your next transaction.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>

	</div>
);

export default Works;
