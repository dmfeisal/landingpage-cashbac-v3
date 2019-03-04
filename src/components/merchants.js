import React, { Component } from 'react';
// import merchant from '../data/merchant.json';
import mcdLogo from '../images/merchants/mcd.svg';
import dcostLogo from '../images/merchants/dcost.png';
import erickayserLogo from '../images/merchants/Eric_Kayser.png';
import donburiLogo from '../images/merchants/donburi_ichiya.png';
import namnamLogo from '../images/merchants/namnam.png';
import mamLogo from '../images/merchants/mam.svg';
import osakaLogo from '../images/merchants/osaka.png';
import lewiscarollLogo from '../images/merchants/lewiscaroll.png';
import altitudeLogo from '../images/merchants/altitude.jpg';
// import enmaruLogo from '../images/merchants/enmaru.png';
import shabu2Logo from '../images/merchants/shabu2.png';
import sweethutLogo from '../images/merchants/sweethut.png';
import annawijayaLogo from '../images/merchants/annawijaya.svg';
import luxeLogo from '../images/merchants/luxe.svg';
import relaxlivingLogo from '../images/merchants/relaxliving.svg';
import realyogaLogo from '../images/merchants/realyoga.svg';
import alegroLogo from '../images/merchants/alegro.png';
import aromagelatoLogo from '../images/merchants/aroma.svg';
import ombekoffieLogo from '../images/merchants/ombe.svg';
import trafiqueLogo from '../images/merchants/trafique.svg';
import bebekbengilLogo from '../images/merchants/bengil.svg';
import illuaLogo from '../images/merchants/illua.svg';
import gaiaLogo from '../images/merchants/gaia.svg';
import cloudLogo from '../images/merchants/cloud.svg';


class Merchants extends Component {
	// listItem = listData => {
  //   return listData.map((list, li) => (
  //     <Col key={li} xs={12} sm={6} md={4}>
  //       {list.map((l, ai) => (<p key={ai}><Link to={formatListItemLink(l.name, active)}>{l.name}</Link></p>))}
  //     </Col>
  //   ))
	// }
	
	render() {
		return (

			<div>
				<section className="section has-background-light" id="merchants">
				<hr className="spacer is-4"></hr>
					<div className="container">
							<h2 className="title has-text-centered-mobile">
								Accepted at over 1000 merchants
							</h2>
							<hr className="spacer is-0.5"></hr>
							<p className="subtitle has-text-centered-mobile">
							You can use Cashbac to shop, earn, and be rewarded at popular restaurants, coffee shops, and stores 
							</p>
							<hr className="spacer is-3"></hr>
					</div>
					<div className="container">
							<div className="columns is-multiline is-mobile">
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac Mcd" width="70px" src={mcdLogo}/>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" height="50px" src={dcostLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={erickayserLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={donburiLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={namnamLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="100px" src={mamLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="100px" src={osakaLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Merchant Cashbac" width="70px" src={lewiscarollLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="100px" src={altitudeLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="50px" src={shabu2Logo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="100px" src={sweethutLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Merchant Cashbac" width="100px" src={annawijayaLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={luxeLogo}/>
									</figure>
								</div>
								
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={relaxlivingLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={realyogaLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={alegroLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={aromagelatoLogo}/>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="50px" src={ombekoffieLogo}/>			    
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="70px" src={trafiqueLogo}/>
									</figure>
								</div>
									<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
										<figure className="box">
											<img alt="Merchant Cashbac" width="70px" src={bebekbengilLogo}/>
										</figure>
									</div>
									<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
										<figure className="box">
											<img alt="Merchant Cashbac" width="70px" src={illuaLogo}/>
										</figure>
									</div>
									<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
										<figure className="box">
											<img alt="Merchant Cashbac" width="60px" src={gaiaLogo}/>
										</figure>
									</div>
									<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
										<figure className="box">
											<img alt="Merchant Cashbac" width="70px" src={cloudLogo}/>
										</figure>
									</div>	
							</div>

							<br />
							<p className="has-text-right has-text-centered-mobile">
							We are adding new merchants every day! see the complete list in Cashbac App. <a href="#">Download here > </a>
							</p>
							</div>
					<hr className="spacer is-4"></hr>
				</section>
			</div>
		)
	}
}
export default Merchants;
