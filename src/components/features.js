import React from 'react';
import './style.scss';
import buttonGooglePlay from '../images/google_badge_en_get.svg';
import buttonAppStore from '../images/appstore_badge_en.svg';
import funnelIcon from '../images/business/funnel-icon.png';
import moneyIcon from '../images/business/money-icon.png';
import screenIcon from '../images/business/screen-icon.png';
import secureIcon from '../images/business/secure-icon.png';

const Features = () => (

		<div>
		<section className="section has-background-light" id="features">
		<div className="container ">
		<h1 className="title has-text-centered-desktop"> Why Cashbac? </h1>
			<br />

			<div class="container">
				<div class="tile is-ancestor is-desktop">
					<div class="tile is-parent ">
					    <article class=" media tile box">

							<div class="media-content">
								<figure class="image" id="icon-features">
							    	<img src={screenIcon}/>
							    </figure>
								<div class="content">
					   				<h5 class=" title is-4">Not Only Cashless, but Cardless!</h5>
									<p>
									Use Cashbac to save money all year round! With instant cashback on every purchase, use it immediately or save it for bigger purchase its up to you. Enjoy money saving deals every day on various dining, lifestyle, and entertainment merchants.
									</p>
								</div>
							</div>
					    </article>
					</div>

					<div class="tile is-parent">
					    <article class="media tile box">
							<div class="media-content">
								<figure class="image" id="icon-features">
							    	<img src={funnelIcon}/>
							    </figure>
								<div class="content">
					   				<h5 class=" title is-4">No Minimum Transaction</h5>
									<p>
									Use Cashbac to save money all year round! With instant cashback on every purchase, use it immediately or save it for bigger purchase its up to you. Enjoy money saving deals every day on various dining, lifestyle, and entertainment merchants.
									</p>
								</div>
							</div>
					    </article>
					</div>

					<div class="tile is-parent ">
					    <article class=" media tile box">
							<div class="media-content">
								<figure class="image" id="icon-features">
							    	<img src={moneyIcon}/>
							    </figure>
								<div class="content">
					   				<h5 class=" title is-4">Secure with Bank Standard </h5>
									<p>
									Use Cashbac to save money all year round! With instant cashback on every purchase, use it immediately or save it for bigger purchase its up to you. Enjoy money saving deals every day on various dining, lifestyle, and entertainment merchants.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div class="tile is-parent">
					    <article class=" media tile box">
							<div class="media-content">
								<figure class="image" id="icon-features">
							    	<img src={secureIcon}/>
							    </figure>
					   				
								<div class="content">
								<h5 class=" title is-4">Anonimity </h5>
									<p>
									Use Cashbac to save money all year round! With instant cashback on every purchase, use it immediately or save it for bigger purchase its up to you. Enjoy money saving deals every day on various dining, lifestyle, and entertainment merchants.
									
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

export default Features;
