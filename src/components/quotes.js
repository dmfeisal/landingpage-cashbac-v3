import React from 'react';
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

			<div className="container">
				<div className="tile is-ancestor is-desktop">
					<div className="tile is-parent">
							<article className="media tile box">
							    <div className="media-left" id="logo-merchant">
							      <figure className="image">
							        <img alt="Merchant McD" src={mcdLogo}/>
							      </figure>
							    </div>
							    <div className="media-content">
							      <div className="content">
							      	<p>
							        "Since customers are able to use their existing credit/debit cards we've been able to see an increase in customer engagement."
							        </p>
							        <h5>Maulana Indra, Director of Marketing McDonald's Indonesia</h5>
							      </div>
							    </div>
							</article>
							
					</div>
					<div className="tile is-parent">
							<article className="media tile box">
							    <div className="media-left" id="logo-merchant">
							      <figure className="image">
							        <img alt="Merchant McD" src={dcostLogo}/>
							      </figure>
							    </div>
							    <div className="media-content">
							      <div className="content">
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
