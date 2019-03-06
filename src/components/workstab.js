
/* eslint-disable */
import React from 'react';
import linkcardMockup from '../images/mockup/how-it-works-link-cards.png';
import finddealsMockup from '../images/mockup/how-it-works-find-deals.png';
import getcashbackMockup from '../images/mockup/how-it-works-get-cashback.png';
import referralMockup from '../images/mockup/how-it-works-referral.png';

import Emoji from './emoji';
 
class Workstab extends React.Component {
	handleStories (e) {
		e.preventDefault()
		let target = e.currentTarget
		let imgTarget = document.getElementById(target.getAttribute('data-anchor')) 
		let removeTarget = document.querySelector('.tab.is-active')
		let removeImgTarget = document.querySelector('.screen.is-active')
		if (removeTarget && removeImgTarget) {
			removeTarget.classList.remove('is-active')
			removeImgTarget.classList.remove('is-active')
			target.classList.toggle('is-active')
			imgTarget.classList.toggle('is-active')
		}
	}
	render () {
		return (
			<div>
				<section id="works" className="section is-platform is-medium">
					<hr className="spacer is-4"></hr>
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-12 is-10-fullhd">
								<div className="columns">
									<div className="column is-6">
										<div className="section-header">
											<h1 className="title is-spaced">How Cashbac Works</h1>
											<p className="subtitle is-6">With our simple and easy-to-use app, you can now enjoy instant cashback anywhere and anytime.</p>
										<hr className="spacer is-1"></hr>
										</div>
										
										<div className="section-body">
											<div className="vertical-tabs">
												<a className="tab is-active" data-anchor="step-link-card" href="#" onClick={e => { this.handleStories(e) } } >
													<h3 className="title is-6"> Link Your Credit Card, Debit Card or E-Wallet </h3>
													<p className="subtitle is-6"> To enable Cashbac for transaction, add at least one of your credit cards or debit cards or e-wallet on Cashbac app. Don’t worry about security – Cashbac implements Secure 3D Process to protect all your card details. </p>
												</a>
												<a className="tab" data-anchor="step-explore" href="#" onClick={e => { this.handleStories(e) } } >
													<h3 className="title is-6"> Explore and Find the Best Deals! </h3>
													<p className="subtitle is-6"> Cashbac automatically provides the best recommendations of restaurants, grocery stores, coffee shops, beauty clinics, and even karaoke places based on your interests and locations. </p>
												</a>
												<a className="tab" data-anchor="step-getcashback" href="#" onClick={e => { this.handleStories(e) } } >
													<h3 className="title is-6"> Get Instant Cashback </h3>
													<p className="subtitle is-6"> To make a transaction, just tap your mobile phone on our beacon device or scan the QR code printed on the bill. Get instant cashback that you can directly use for your next purchase! </p>
												</a>
												<a className="tab" data-anchor="step-referral" href="#" onClick={e => { this.handleStories(e) } } >
													<h3 className="title is-6"> Share Your Referral Code for Extras </h3>
													<p className="subtitle is-6"> Invite your friends to register for Cashbac with your referral code and receive the rewards. Your friends receive Rp50.000 the moment they register their credit card for the first time and you will receive Rp25.000 when they make their first transaction with Cashbac. </p>
												</a>
												
											</div>
											<hr className="spacer is-1"></hr>
											</div>
										</div>

										<div className="column is-6 align-self-stretch">
											<div className="section-media">
												<div className="screens">
													<div className="screen is-active" id="step-link-card" href="#">
														<img role="presentation" src={linkcardMockup} />
													</div>
													<div className="screen" id="step-explore" href="#">
														<img role="presentation" src={finddealsMockup} />
													</div>
													<div className="screen" id="step-getcashback" href="#">
														<img role="presentation" src={getcashbackMockup} />
													</div>
													<div className="screen" id="step-referral" href="#">
														<img role="presentation" src={referralMockup} />
													</div>
												</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr className="spacer is-6"></hr>
				</section>
			</div>
		)
	}
}
export default Workstab;
