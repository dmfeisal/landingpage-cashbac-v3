import React from 'react';
import mcdLogo from '../images/merchants/mcdonalds.png';
import dcostLogo from '../images/merchants/dcost.png';
import shareteaLogo from '../images/merchants/sharetea.png';
import familymartLogo from '../images/merchants/familymart.png';
import kopikenanganLogo from '../images/merchants/kopikenangan.png';
import libericaLogo from '../images/merchants/liberica.png';


const Featuredmerchants = () => (

		<div>
		<section className="section" id="featured-merchants">
			<div className="container">
			
					<h1 className="title has-text-centered-desktop has-text-centered-mobile has-text-centered-tablet">
						OUR HAPPY MERCHANTS
					</h1>
			
			</div>
			
			<br/>

			<div className="container has-text-centered-mobile">
				<div className="tile columns is-multiline is-mobile is-tablet is-ancestor">
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent ">
					    <article className="tile is-child">
					      <img alt="Merchant Mc. Donald" src={mcdLogo} id="featured-logo"/>
					    </article>
					</div>
					
					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					      <img alt="Merchant FamilyMart" src={familymartLogo} id="featured-logo"/>
					    </article>
					</div>

					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent inline-block has-text-centered">
					    <article className="tile is-child">
					      <img alt="Merchant Sharetea" src={shareteaLogo} id="featured-logo" />
					    </article>
					</div>


					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					      <img alt="Merchant dCost" src={dcostLogo} id="featured-logo"/>
					    </article>
					</div>

					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent ">
					    <article className="tile is-child">
					      <img alt="Merchant Kopi Kenangan" src={kopikenanganLogo} id="featured-logo"/>
					    </article>
					</div>

					<div className="tile column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					      <img alt="Merchant Liberica" src={libericaLogo} id="featured-logo"/>
					    </article>
					</div>
				</div>
			

	</div>

	</section>
	</div>

	);

export default Featuredmerchants;
