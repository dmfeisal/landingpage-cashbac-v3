import React, { Component } from 'react';
// import merchant from '../data/merchant.json';
import mcdLogo from '../images/merchants/mcd.svg';
import dcostLogo from '../images/merchants/dcost.png';
import penangbistroLogo from '../images/merchants/penangbistro.png';
import soursallyLogo from '../images/merchants/soursally.png';
import platinumLogo from '../images/merchants/platinum.png';
import negiyaLogo from '../images/merchants/negiya.png';
import weenamkeeLogo from '../images/merchants/weenamkee.png';
import magalLogo from '../images/merchants/magal.jpg';
import kopikenanganLogo from '../images/merchants/kopikenangan.png';
import gromLogo from '../images/merchants/grom.png';
import excelsoLogo from '../images/merchants/excelso.png';
import chatimeLogo from '../images/merchants/chatime.jpg';
import forecoffeeLogo from '../images/merchants/forecoffee.png';
import hophopLogo from '../images/merchants/hophop.png';
import hokkaidoLogo from '../images/merchants/hokkaido.png';
import oldchangkeeLogo from '../images/merchants/oldchangkee.png';
import altitudeLogo from '../images/merchants/altitude.jpg';
import annawijayaLogo from '../images/merchants/annawijaya.svg';
import relaxlivingLogo from '../images/merchants/relaxliving.svg';
import alfamartLogo from '../images/merchants/alfamart.png';
import familymartLogo from '../images/merchants/familymart.png';
import gramediaLogo from '../images/merchants/gramedia.png';
import masterpieceLogo from '../images/merchants/masterpiece.png';
import kidzaniaLogo from '../images/merchants/kidzania.png';

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
										<img alt="Merchant Cashbac McDonald's" width="70px" src={mcdLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">McDonald's</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Sour Sally Merchant Cashbac" width="100px" src={soursallyLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">Sour Sally</div>
										</div>									
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="120px" src={penangbistroLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">Penang Bistro</div>
										</div>									
									</figure>
								</div>
								
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="100px" src={platinumLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">Platinum</div>
										</div>									
									</figure>
								</div>
								
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="80px" src={negiyaLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">Negiya</div>
										</div>									
									</figure>
								</div>
								

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" width="100px" src={altitudeLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Altitude</div>
									</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Wee Nam Kee Merchant Cashbac" width="100px" src={weenamkeeLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Wee Nam Kee</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Magal Merchant Cashbac" width="100px" src={magalLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Magal</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="GROM Merchant Cashbac" width="100px" src={gromLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">GROM</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Merchant Cashbac" height="70px" src={dcostLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">D'Cost</div>
										</div>
									</figure>
								</div>
								
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Kopi Kenangan Merchant Cashbac" width="100px" src={kopikenanganLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Kopi Kenangan</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Excelso Merchant Cashbac" width="70px" src={excelsoLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Excelso</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Fore Coffee Merchant Cashbac" width="100px" src={forecoffeeLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Fore Coffee</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Chatime Merchant Cashbac" width="100px" src={chatimeLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Chatime</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Hop Hop Merchant Cashbac" width="70px" src={hophopLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Hop Hop</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Hokkaido Merchant Cashbac" width="80px" src={hokkaidoLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Hokkaido Cheese Cake</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Old Chang Kee Merchant Cashbac" width="90px" src={oldchangkeeLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Old Chang Kee</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Family Mart Merchant Cashbac" width="110px" src={familymartLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Family Mart</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Alfamart Merchant Cashbac" width="90px" src={alfamartLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Alfamart</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Gramedia Merchant Cashbac" width="110px" src={gramediaLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Gramedia</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Masterpiece Signature Family KTV Merchant Cashbac" width="120px" src={masterpieceLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Masterpiece Signature Family KTV</div>
										</div>
									</figure>
								</div>

								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="KidZania Merchant Cashbac" width="110px" src={kidzaniaLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">KidZania</div>
										</div>
									</figure>
								</div>
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
										<img alt="Relax Living Spa Merchant Cashbac" width="70px" src={relaxlivingLogo}/>
										<div className="overlay">
											<div className="text-overlay noselect">Relax Living Spa</div>
										</div>
									</figure>
								</div>
								
								<div className="has-text-centered column is-6-mobile is-2-desktop is-3-tablet">
									<figure className="box">
									<img alt="Anna Wijaya Merchant Cashbac" width="100px" src={annawijayaLogo}/>
									<div className="overlay">
											<div className="text-overlay noselect">Anna Wijaya</div>
										</div>
									</figure>
								</div>
								
	
							</div>

							</div>
					<hr className="spacer is-4"></hr>
				</section>
			</div>
		)
	}
}
export default Merchants;
