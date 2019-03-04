import React from 'react';
import funnelIcon from '../images/business/funnel-icon.png';
import moneyIcon from '../images/business/money-icon.png';
import screenIcon from '../images/business/screen-icon.png';
import secureIcon from '../images/business/secure-icon.png';

const BusinessFeatures = () => (
	<div>
		<section className="section has-background-light" id="business-features">
		<div className="container ">
		<h1 className="title has-text-centered-desktop has-text-centered-mobile has-text-centered-desktop has-text-centered-tablet"> FEATURES </h1>
		<p className="subtitle has-text-centered-desktop has-text-centered-mobile" > 
			Shift advertising budget directly to consumers and generate more purchases,
			repeat customer visits and positive brand propagation. Really, it's that easy.
		</p>	
			<br/>

			<div className="columns is-multiline is-mobile is-tablet"> 
					<div className="column is-12-mobile is-6-desktop is-6-tablet ">
					  <figure className="media box">
							<div className="media-left">
					   			<span>
									<img className="business-icon-feature" alt="Manage Your Own Campaign" src={screenIcon} />
								</span>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">Manage Your Own Campaign</h5>
									<p className="has-text-left">Cashbac helps you to analyze your customer behavior and transactional data to set your campaing strategy.</p>
								</div>
							</div>
					  </figure>
					</div>

					<div className="column is-12-mobile is-6-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-left" id="business-icon-feature">
								<span>
									<img className="business-icon-feature" alt="User Funnel" src={funnelIcon}/>
								</span>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">User Funnel</h5>
									<p className="has-text-left">
									Attract new customer, build a deeper relationship and make them loyal to your business.
									</p>
								</div>
							</div>
					    </figure>
					</div>

					<div className="column is-12-mobile is-6-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-left">
					   			<span>
									<img className=" business-icon-feature" alt="Realtime Transaction" src={moneyIcon}/>
								</span>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className="title-feature">Realtime Transaction</h5>
									<p className="has-text-left">
									Transaction data automatically collected in the system. Tracking it every time, everywhere.
									</p>
								</div>
							</div>
						</figure>
					</div>

					<div className="column is-12-mobile is-6-desktop is-6-tablet">
					    <figure className="media box">
							<div className="media-left">
					   			<span>
									<img className="business-icon-feature" alt="Secure Money" src={secureIcon}/>
								</span>
							</div>
							<div className="media-content">
								<div className="content">
								<h5 className="title-feature">Secure Money</h5>
									<p className="has-text-left">
									Directly payment using credit or debit card. It minimizes fraud transaction.
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
