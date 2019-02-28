import React from 'react';
// import buttonGooglePlay from '../images/google_badge_en_get.svg';
// import buttonAppStore from '../images/appstore_badge_en.svg';
import funnelIcon from '../images/business/funnel-icon.png';
import moneyIcon from '../images/business/money-icon.png';
import screenIcon from '../images/business/screen-icon.png';
import secureIcon from '../images/business/secure-icon.png';

const Features = () => (

		<div>
		<section className="section has-background-light" id="features">
		<hr className="spacer is-4"></hr>
		<div className="container ">
		<h1 className="title has-text-centered-desktop"> Why Cashbac? </h1>
			<br />

			<div className="container">
				<div className="tile is-ancestor is-desktop">
					<div className="tile is-parent ">
					  <article className="media tile box">
							<div className="media-content">
								{/*<figure className="image" id="icon-features">
							    <img alt="Cashbac Features Dashboard" src={screenIcon}/>
								</figure>*/}
								<div className="content">
					   			<h5 className="title-feature">Instant Cashback</h5>
									<p className="has-text-left">Your cashback rewards can immediately be used for your next transaction or saved for another time.</p>
								</div>
							</div>
					  </article>
					</div>

					<div className="tile is-parent">
					    <article className="media tile box">
							<div className="media-content">
								
								<div className="content">
					   				<h5 className="title-feature">No Expiry Period</h5>
									<p className="has-text-left">
									As long as your account is active, your cashback rewards will always be available for claiming or usage.
									</p>
								</div>
							</div>
					    </article>
					</div>

					<div className="tile is-parent">
					    <article className="media tile box">
							<div className="media-content">
								
								<div className="content">
					   				<h5 className="title-feature">No Need for Top-Ups</h5>
									<p className="has-text-left">
									Simply connect your credit card/debit card/e-wallet to make transactions and collect rewards.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="tile is-parent">
					    <article className="media tile box">
							<div className="media-content">
					   				
								<div className="content">
								<h5 className="title-feature">Highly Secure</h5>
									<p className="has-text-left">
									Cashbac implements Secure 3D Process, adheres to PCI DSS Compliant rules, and requires a PIN for every transaction. It is not your wallet - it is as safe as your bank.
									</p>
								</div>
							</div>
						</article>
					</div>
					

				</div>

				<div className="tile is-ancestor is-desktop">
					<div className="tile is-parent ">
					  <article className=" media tile box">
							<div className="media-content">
								<div className="content">
					   			<h5 className="title-feature">Simple Transaction</h5>
									<p className="has-text-left">Making a transaction and earning your rewards is as easy as tapping your phone to a beacon or scanning a QR code.</p>
								</div>
							</div>
					  </article>
					</div>

					<div className="tile is-parent">
					    <article className="media tile box">
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">The Best Promos Around You</h5>
									<p className="has-text-left">
									Automatic recommendations of the best cashback promos all around your current location
									</p>
								</div>
							</div>
					    </article>
					</div>

					<div className="tile is-parent ">
					    <article className="media tile box">
							<div className="media-content">
								
								<div className="content">
					   				<h5 className="title-feature">1000+ Merchants </h5>
									<p className="has-text-left">
									From cafes and restaurants to gyms, spas, and karaoke outlet - Cashbac has plenty of options for you to treat yourself
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="tile is-parent">
					    <article className="media tile box">
							<div className="media-content">
					   				
								<div className="content">
								<h5 className="title-feature">Multiple Rewards</h5>
									<p className="has-text-left">
									Multiply your cashback rewards for each transaction by simply connecting one of the credit cards from our bank partners to the app.
									</p>
								</div>
							</div>
						</article>
					</div>
					

				</div>

				</div>
			</div>
		<hr className="spacer is-4"></hr>
		</section>

	</div>

	);

export default Features;
