import React from 'react';
import mcdLogo from '../images/merchants/mcd.svg';

const Quotes = () => (

		<div>
		<section className="section" id="quotes">
			<div className="container">
			
					<h2 className="title has-text-centered-desktop has-text-centered-mobile has-text-centered-tablet ">
						Here's what our Partners said</h2>
			
			</div>
			
			<hr className="spacer is-4"></hr>

			<div className="container">
			<div className="columns is-multiline is-mobile is-tablet"> 
				<div className="column is-12-mobile is-6-desktop is-6-tablet ">
				  <figure className="media box">
						<div className="media-left">
				   			<span>
								<img className="business-icon-feature" alt="Manage Your Own Campaign" src={mcdLogo} />
							</span>
						</div>
						<div className="media-content">
							<div className="content">
								<p className="has-text-left">
									"Since customers are able to use their existing credit/debit cards we've been able to see an increase in customer engagement."
								</p>
								<h5 className="title-feature">Indra Maulana, CEO McD Indonesia</h5>
							</div>
						</div>
				  </figure>
				</div>

				<div className="column is-12-mobile is-6-desktop is-6-tablet">
				    <figure className="media box">
						<div className="media-left" id="business-icon-feature">
							<span>
								<img className="business-icon-feature" alt="Logo" src={mcdLogo}/>
							</span>
						</div>
						<div className="media-content">
							<div className="content">
								<p className="has-text-left">
									"Cashbac's marketing solution has proven to be successful as a customer awareness tool across our restaurant venues."
								</p>
								<h5 className="title-feature">Indra Maulana, CEO McD Indonesia</h5>
							</div>
						</div>
				    </figure>
				</div>

				
			</div>
		</div>
	</section>
	</div>

	);

export default Quotes;
