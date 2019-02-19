import React from 'react';
import './style.scss';
import funnelIcon from '../images/business/funnel-icon.png';
import moneyIcon from '../images/business/money-icon.png';
import screenIcon from '../images/business/screen-icon.png';
import secureIcon from '../images/business/secure-icon.png';

const BusinessFeatures = () => (

		<div>
		<section className="section has-background-light" id="business-features">
		<div className="container ">
		<h1 className="title has-text-centered-desktop has-text-centered-mobile"> FEATURES </h1>
		<p class="subtitle has-text-centered-desktop has-text-centered-mobile" > 
			Shift advertising budget directly to consumers and generate more purchases,
			repeat customer visits and positive brand propagation. Really, it's that easy.
		</p>	
			<br/>

			<div class="container">
				<div class="tile is-ancestor is-desktop">
					<div class="tile is-parent ">
					    <article class=" media tile box">
					   		<div class="media-left">
							    <figure class="image" id="icon-features">
							    	<img src={screenIcon}/>
							    </figure>
							</div>
							<div class="media-content">
								<div class="content">
					   				<h5 class=" title is-4">Manage Your Own Campaign </h5>
									<p>
									Cashbac helps you to analyze your customer behavior and transactional data to set your campaing strategy.
									</p>
								</div>
							</div>
					    </article>
					</div>

					<div class="tile is-parent">
					    <article class=" media tile box">
					   		<div class="media-left">
							    <figure class="image" id="icon-features">
							    	<img src={funnelIcon}/>
							    </figure>
							</div>
							<div class="media-content">
								<div class="content">
					   				<h5 class=" title is-4">User Funnel</h5>
									<p>
									Attract new customer, build a deeper relationship and make them loyal to your business.
									</p>
								</div>
							</div>
					    </article>
					</div>
				</div>
				<div class="tile is-ancestor is-desktop">
					<div class="tile is-parent ">
					    <article class=" media tile box">
					   		<div class="media-left">
							    <figure class="image" id="icon-features">
							    	<img src={moneyIcon}/>
							    </figure>
							</div>
							<div class="media-content">
								<div class="content">
					   				<h5 class=" title is-4">Realtime Transcation </h5>
									<p>
									Transaction data automatically collected in the system. Tracking it every time, everywhere.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div class="tile is-parent">
					    <article class=" media tile box">
					   		<div class="media-left" >
							    <figure class="image" id="icon-features">
							    	<img src={secureIcon}/>
							    </figure>
							</div>
							<div class="media-content">
								<div class="content">
					   				<h5 class=" title is-4">Secure Money </h5>
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
