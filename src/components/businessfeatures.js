import React from 'react';
import funnelIcon from '../images/business/funnel-icon.png';
import moneyIcon from '../images/business/money-icon.png';
import screenIcon from '../images/business/screen-icon.png';
import secureIcon from '../images/business/secure-icon.png';

const BusinessFeatures = () => (
	<div>
		<section className="section has-background-light" id="business-features">
		<div className="container ">
		<h1 className="title has-text-centered-desktop has-text-centered-mobile has-text-centered-desktop has-text-centered-tablet"> 
		What Makes Cashbac Business Different?
		</h1>
		<p className="subtitle has-text-centered-desktop has-text-centered-mobile" > 
			Shift advertising budget directly to consumers and generate more purchases, <div></div>
			repeat customer visits and positive brand propagation. Really, it's that easy.
		</p>	
			<br/>

			<div className="columns is-multiline is-mobile is-tablet"> 
					
					<div className="column is-12-mobile is-6-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-left">
					   			<span>
									<img className=" business-icon-feature" alt="Real-time Transaction" src={moneyIcon}/>
								</span>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">Real-time Transaction</h5>
									<p className="has-text-left">
									Transaction data automatically collected in the system. Tracking it every time, everywhere.
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-6-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-left" id="business-icon-feature">
								<span>
									<img className="business-icon-feature" alt="Reach All Your Customers" src={funnelIcon}/>
								</span>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">Reach All Your Customers</h5>
									<p className="has-text-left">
									From potential customers to lapsed ones - reach them, build relationships with them, and make them loyal enough to repeat transactions.
									</p>
								</div>
							</div>
					    </figure>
					</div>

					<div className="column is-12-mobile is-6-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-left">
					   			<span>
									<img className="business-icon-feature" alt="Secure, Direct Payment" src={secureIcon}/>
								</span>
							</div>
							<div className="media-content">
								<div className="content">
								<h5 className="title-feature">Secure Money</h5>
									<p className="has-text-left">
									Leave your worries of frauds behind with immediate, direct settlement of all transactions to your credit or debit card. 
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-6-desktop is-6-tablet ">
					  <figure className="media box">
							<div className="media-left">
					   			<span>
									<img className="business-icon-feature" alt="Manage Your Own Campaign" src={screenIcon} />
								</span>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">Customer-Centered Campaigns</h5>
									<p className="has-text-left">
									Speak directly to your customers in their language and create campaign strategies most suitable for them with Cashbac's insights of their behaviors and transaction.
									</p>
								</div>
							</div>
					  </figure>
					</div>


				</div>
			</div>

		</section>
	</div>

	);

export default BusinessFeatures;
