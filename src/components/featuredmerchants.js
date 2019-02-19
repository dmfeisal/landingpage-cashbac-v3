import React from 'react';
import './style.scss';
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
			
					<h1 className="title has-text-centered-desktop has-text-centered-mobile">
						OUR HAPPY MERCHANTS
					</h1>
			
			</div>
			
			<br/>

			<div className="container">
				<div className="tile is-ancestor">
					<div className="tile is-parent ">
					    <article className="tile is-child">
					      <img src={mcdLogo} id="featured-logo"/>
					    </article>
					</div>
					
					<div className="tile is-parent">
					    <article className="tile is-child">
					      <img src={familymartLogo} id="featured-logo"/>
					    </article>
					</div>

					<div className="tile is-parent inline-block has-text-centered">
					    <article className="tile is-child">
					      <img src={shareteaLogo} id="featured-logo" />
					    </article>
					</div>


					<div className="tile is-parent">
					    <article className="tile is-child">
					      <img  src={dcostLogo} id="featured-logo"/>
					    </article>
					</div>

					<div className="tile is-parent ">
					    <article className="tile is-child">
					      <img src={kopikenanganLogo} id="featured-logo"/>
					    </article>
					</div>

					<div className="tile is-parent">
					    <article className="tile is-child">
					      <img  src={libericaLogo} id="featured-logo"/>
					    </article>
					</div>
				</div>
			

	</div>

	</section>
	</div>

	);

export default Featuredmerchants;
