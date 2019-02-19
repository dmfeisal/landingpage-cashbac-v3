import React from 'react';
import './style.scss';
import mcdLogo from '../images/merchants/mcd.svg';
import dcostLogo from '../images/merchants/dcost.png';

const Quotes = () => (

		<div>
		<section className="section" id="quotes">
			<div className="container">
			
					<h2 className="title has-text-centered-desktop has-text-centered-mobile">
						Here's what our Customer said
					</h2>
			
			</div>
			
			<br/>

			<div class="container">
				<div class="tile is-ancestor is-desktop">
					<div class="tile is-parent">
							<article class="media tile box">
							    <div class="media-left" id="logo-merchant">
							      <figure class="image">
							        <img src={mcdLogo}/>
							      </figure>
							    </div>
							    <div class="media-content">
							      <div class="content">
							      	<p>
							        "Since customers are able to use their existing credit/debit cards we've been able to see an increase in customer engagement."
							        </p>
							        <h5>Maulana Indra, Director of Marketing McDonald's Indonesia</h5>
							      </div>
							    </div>
							</article>
							
					</div>
					<div class="tile is-parent">
							<article class="media tile box">
							    <div class="media-left" id="logo-merchant">
							      <figure class="image">
							        <img src={dcostLogo}/>
							      </figure>
							    </div>
							    <div class="media-content">
							      <div class="content">
							      	<p>
							        "Cashbac's marketing solution has proven to be successful as a customer awareness tool across our restaurant venues.
							        </p>
							        <h5>Indra Maulana, CEO D'COST</h5>
							      </div>
							    </div>
							</article>
							
					</div>
				</div>
			

	</div>

	</section>
	</div>

	);

export default Quotes;
