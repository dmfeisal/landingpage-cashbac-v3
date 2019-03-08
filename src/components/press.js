import React from 'react';
import dailysocialLogo from '../images/DailySocial-Logo-Grey.png';
import techinasiaLogo from '../images/Tech-In-Asia-Logo.png';
import marketeersLogo from '../images/marketeers-logo.png';
import sindonewsLogo from '../images/sindonews-logo.png';
import kompasLogo from '../images/kompascom-logo.png';
import swaLogo from '../images/swa-logo.png';

const Press = () => (

		<div>
		<section className="section" id="press">
			<div className="container">
			
					<h1 className="title has-text-centered-desktop has-text-centered-mobile has-text-centered-tablet">
						As seen in:
					</h1>
			
			</div>
			
			<br/>

			<div className="container has-text-centered-mobile has-text-centered-desktop">
				<div className="columns is-multiline is-mobile is-tablet is-ancestor">
					<div className=" column is-6-mobile is-2-desktop is-2-table is-parent ">
					    <article className=" is-child">
					      <a href="https://id.techinasia.com/cashbac-pembayaran-dengan-cashback" target="_blank" rel="noopener noreferrer" >
					      <img alt="Tech In Asia" src={techinasiaLogo} id="press-logo"/>
					      </a>
					    </article>
					</div>
					
					<div className="column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="is-child">
					    <a href="https://dailysocial.id/post/cashbac-platform-gaya-hidup-instant-reward" target="_blank" rel="noopener noreferrer" >
					      <img alt="Daily Social" src={dailysocialLogo} id="press-logo"/>
					    </a>
					    </article>
					</div>
					
					<div className="column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="is-child">
					    <a href="http://marketeers.com/global-pay-kenalkan-aplikasi-cashbac/" target="_blank" rel="noopener noreferrer" >
					      <img alt="Marketeers" src={marketeersLogo} id="press-logo"/>
					    </a>
					    </article>
					</div>

					<div className="column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="tile is-child">
					    <a href="https://swa.co.id/swa/trends/mcdonalds-gandeng-cashbac-dorong-transaksi-non-tunai" target="_blank" rel="noopener noreferrer" >
					      <img alt="SWA" src={swaLogo} id="press-logo"/>
					    </a>
					    </article>
					</div>

					<div className="column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="is-child center">
					    <a href="https://lifestyle.kompas.com/read/2018/04/18/211300320/kaum-urban-milenial-senang-berburu-promo-saat-belanja" target="_blank" rel="noopener noreferrer" >
					      <img alt="Kompas.com" src={kompasLogo} id="press-logo"/>
					    </a>
					    </article>
					</div>
					
					<div className="column is-6-mobile is-2-desktop is-2-table is-parent">
					    <article className="is-child">
					    <a href="https://autotekno.sindonews.com/read/1299002/133/global-pay-indonesia-pastikan-cashbac-mudah-nyaman-dan-aman-1524072555" target="_blank" rel="noopener noreferrer" >
					      <img alt="Sindo News" src={sindonewsLogo} id="press-logo"/>
					    </a>
					    </article>
					</div>
				</div>

	</div>




	</section>
	</div>

	);

export default Press;
