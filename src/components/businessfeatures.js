import React from 'react';
import funnelIcon from '../images/business/funnel-icon.png';
import moneyIcon from '../images/business/money-icon.png';
import screenIcon from '../images/business/screen-icon.png';
import secureIcon from '../images/business/secure-icon.png';

const BusinessFeatures = () => (
		<div>
		<section className="section has-background-light" id="business-features">
		<div className="container ">
		<h1 className="title has-text-centered-desktop has-text-centered-mobile"> FEATURES </h1>
		<p className="subtitle has-text-centered-desktop has-text-centered-mobile" > 
			Shift advertising budget directly to consumers and generate more purchases,
			repeat customer visits and positive brand propagation. Really, it's that easy.
		</p>	
			<br/>

			<div className="container">
				<div className="tile is-ancestor is-desktop">
					<div className="tile is-parent ">
					    <article className=" media tile box">
					   		<div className="media-left">
							    <figure className="image" id="icon-features">
							    	<img alt="Cashbac Features screen" src={screenIcon}/>
							    </figure>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className=" title is-4">Manage Your Own Campaign </h5>
									<p>
									Cashbac helps you to analyze your customer behavior and transactional data to set your campaing strategy.
									</p>
								</div>
							</div>
					    </article>
					</div>

					<div className="tile is-parent">
					    <article className="media tile box">
					   		<div className="media-left">
							    <figure className="image" id="icon-features">
							    	<img alt="Cashbac Features Funnel" src={funnelIcon}/>
							    </figure>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className=" title is-4">User Funnel</h5>
									<p>
									Attract new customer, build a deeper relationship and make them loyal to your business.
									</p>
								</div>
							</div>
					    </article>
					</div>
				</div>
				<div className="tile is-ancestor is-desktop">
					<div className="tile is-parent ">
					    <article className=" media tile box">
					   		<div className="media-left">
							    <figure className="image" id="icon-features">
							    	<img alt="Cashbac Features Money" src={moneyIcon}/>
							    </figure>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className=" title is-4">Realtime Transcation </h5>
									<p>
									Transaction data automatically collected in the system. Tracking it every time, everywhere.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="tile is-parent">
					    <article className=" media tile box">
					   		<div className="media-left" >
							    <figure className="image" id="icon-features">
							    	<img alt="Cashbac Features Secure" src={secureIcon}/>
							    </figure>
							</div>
							<div className="media-content">
								<div className="content">
					   				<h5 className=" title is-4">Secure Money </h5>
									<p>
									Directly payment using credit or debit card. It minimizes fraud transaction.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			

	</div>


	</div>

		</section>
	</div>

	);

export default BusinessFeatures;
