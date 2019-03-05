import React from 'react';
// import buttonGooglePlay from '../images/google_badge_en_get.svg';
// import buttonAppStore from '../images/appstore_badge_en.svg';
// import { FaAngleRight, FaClock, FaSyncAlt, FaTimesCircle, FaLock, FaCheckDouble, FaPercentage, FaStoreAlt, FaGift } from 'react-icons/fa';
import { FiGift, FiLock, FiXCircle, FiShoppingCart, FiPercent, FiRepeat, FiClock, FiCheckCircle } from 'react-icons/fi';


const Features = () => (

		<div>
		<section className="section has-background-light" id="features">

		<div className="container ">
		<h1 className="title has-text-centered-desktop"> Why Cashbac? </h1>
			<br />

			<div className="container">
				<div className="columns is-multiline is-mobile is-tablet"> 
					<div className="column is-12-mobile is-4-desktop is-6-tablet ">
					  <figure className="media box">
							<div className="media-content">
					   			<span>
									<FiRepeat className="icon-feature"/>
								</span>
								<div className="content">
					   			<h5 className="title-feature">Instant Cashback</h5>
									<p className="has-text-left">Your cashback rewards can immediately be used for your next transaction or saved for another time.</p>
								</div>
							</div>
					  </figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
								<span>
									<FiClock className="icon-feature"/>
								</span>
								<div className="content">
					   				<h5 className="title-feature">No Expiry Period</h5>
									<p className="has-text-left">
									As long as your account is active, your cashback rewards will always be available for claiming or usage.
									</p>
								</div>
							</div>
					    </figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
					   			<span>
									<FiXCircle className="icon-feature"/>
								</span>
								<div className="content">
					   				<h5 className="title-feature">No Need for Top-Ups</h5>
									<p className="has-text-left">
									Simply connect your credit card/debit card/e-wallet to make transactions and collect rewards.
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
					   			<span>
									<FiLock className="icon-feature"/>
									
								</span>
								<div className="content">
								<h5 className="title-feature">Highly Secure</h5>
									<p className="has-text-left">
									Cashbac implements Secure 3D Process, adheres to PCI DSS Compliant rules, and requires a PIN for every transaction. It is not your wallet - it is as safe as your bank.
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
								<span>
									<FiPercent className="icon-feature"/>
								</span>
								<div className="content">
					   				<h5 className="title-feature">The Best Promos Around You</h5>
									<p className="has-text-left">
									Automatic recommendations of the best cashback promos all around your current location
									</p>
								</div>
							</div>
					    </figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
					   			<span>
									<FiGift className="icon-feature" />
								</span>	
								<div className="content">
								<h5 className="title-feature">Multiple Rewards</h5>
									<p className="has-text-left">
									Multiply your cashback rewards for each transaction by simply connecting one of the credit cards from our bank partners to the app.
									</p>
								</div>
							</div>
						</figure>
					</div>
					

				</div>

				</div>
			</div>

		</section>

	</div>

	);

export default Features;
