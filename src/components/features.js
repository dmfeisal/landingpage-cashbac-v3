import React from 'react';
// import buttonGooglePlay from '../images/google_badge_en_get.svg';
// import buttonAppStore from '../images/appstore_badge_en.svg';
// import { FaAngleRight, FaClock, FaSyncAlt, FaTimesCircle, FaLock, FaCheckDouble, FaPercentage, FaStoreAlt, FaGift } from 'react-icons/fa';
// import { FiGift, FiLock, FiXCircle, FiShoppingCart, FiPercent, FiRepeat, FiClock, FiCheckCircle } from 'react-icons/fi';
import highlysecureIcon from '../images/icon/highly-secure-icon.png';
import instantcashbackIcon from '../images/icon/instant-cashback-icon.png';
import noexpiryIcon from '../images/icon/no-expiry-period-icon.png';
import rewardsIcon from '../images/icon/multiple-rewards-icon.png';
import topupsIcon from '../images/icon/no-need-for-top-ups-icon.png';
import promoIcon from '../images/icon/the-best-promo-around-you-icon.png';

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
									<img src={instantcashbackIcon} alt="Instant Cashback" className="icon-feature"/>
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
									<img src={noexpiryIcon} alt="No Expiry Period" className="icon-feature"/>
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
									<img src={topupsIcon} alt="No Needs for Top-Ups" className="icon-feature"/>
								</span>
								<div className="content">
					   				<h5 className="title-feature">No Need for Top-Ups</h5>
									<p className="has-text-left">
									Simply connect your credit card, debit card or e-wallet to make transactions and collect rewards
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
					   			<span>
									<img src={highlysecureIcon} alt="Highly Secure" className="icon-feature"/>
									
								</span>
								<div className="content">
								<h5 className="title-feature">Highly Secure</h5>
									<p className="has-text-left">
									Cashbac implements procedures to keep your data safe and requires you to enter a PIN for every transaction.
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-4-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-content">
								<span>
									<img src={promoIcon} alt="The Best Promos Around You" className="icon-feature"/>
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
									<img src={rewardsIcon} alt="Multiple Rewards" className="icon-feature" />
								</span>	
								<div className="content">
								<h5 className="title-feature">Multiple Rewards</h5>
									<p className="has-text-left">
									Multiply your cashback rewards by simply connecting one of the credit cards from our bank partners to the app.
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
