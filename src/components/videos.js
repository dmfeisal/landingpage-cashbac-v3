import React from 'react';
import buttonGooglePlay from '../images/google_badge_en_get.svg';
import buttonAppStore from '../images/appstore_badge_en.svg';

const Videos = () => (

		<div>
		<section className="section" id="videos">
		<div className="container">
			<div className="columns">
				<div className="column">
					<h2 className="title">
						Easiest way to earn cashback everytime you dine and shop
					</h2>
					<br />
					<article className="content">Use Cashbac to save money all year round! With instant cashback on every purchase, use it immediately or save it for bigger purchase its up to you. Enjoy money saving deals every day on various dining, lifestyle, and entertainment merchants.</article>
					<p className="content">
					<div  className="column has-left-text-mobile">
						<a href="https://cashbac.onelink.me/1sXQ/homepage">
						<img width="153px" height="45px" src={buttonGooglePlay} alt="Get Cashbac App on Google Play" />
						</a>
						&nbsp; &nbsp;
						<a href="https://cashbac.onelink.me/1sXQ/homepage">
						<img width="153px" height="45px" src={buttonAppStore} alt="Get Cashbac App on Apple Store" />
						</a>
					</div>	
					</p>

				</div>
				<div className="column center">
					<div className="video-container">
						<iframe title="Cashbac video #JanganDipikirin" width="560" height="315" src="https://www.youtube.com/embed/WlofJ0bB26s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>

			</div>
			</div>
			
		</section>
	</div>

	);

export default Videos;
