import React from 'react';
import dailysocialLogo from '../images/DailySocial-Logo-Grey.png';
import techinasiaLogo from '../images/Tech-In-Asia-Logo.png';

const Press = () => (

		<div>
		<section className="section" id="featured-merchants">
			<div className="container">
			
					<h1 className="title has-text-centered-desktop has-text-centered-mobile has-text-centered-tablet">
						As seen in:
					</h1>
			
			</div>
			
			<br/>

			<div className="container has-text-centered-mobile has-text-centered-desktop">
				<div className="tile columns is-multiline is-mobile is-tablet is-ancestor">
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent ">
					    <article className="tile is-child">
					      <img alt="Merchant Mc. Donald" src={techinasiaLogo} id="featured-logo"/>
					    </article>
					</div>
					
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					      <img alt="Merchant FamilyMart" src={dailysocialLogo} id="featured-logo"/>
					    </article>
					</div>
										<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent ">
					    <article className="tile is-child">
					      <img alt="Merchant Mc. Donald" src={techinasiaLogo} id="featured-logo"/>
					    </article>
					</div>
					
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					      <img alt="Merchant FamilyMart" src={dailysocialLogo} id="featured-logo"/>
					    </article>
					</div>
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent ">
					    <article className="tile is-child">
					      <img alt="Merchant Mc. Donald" src={techinasiaLogo} id="featured-logo"/>
					    </article>
					</div>
					
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					      <img alt="Merchant FamilyMart" src={dailysocialLogo} id="featured-logo"/>
					    </article>
					</div>

					
				</div>
			

	</div>

	</section>
	</div>

	);

export default Press;
