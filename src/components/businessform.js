import React, { Component } from 'react';
const StyleForm = {
	'background': '#fff',
	'clear': 'left',
}
class Businessform extends Component {
	constructor(props) {
    super(props);
    this.state = {
			FNAME: '',
			LNAME: '',
			EMAIL: '',
			PHONE: '',
			MMERGE6: '',
			MMERGE3: '',
			MMERGE5: ''
		};

		this.handleChangeFN = this.handleChangeFN.bind(this);
		this.handleChangeLN = this.handleChangeLN.bind(this);
		this.handleChangeEM = this.handleChangeEM.bind(this);
		this.handleChangePH = this.handleChangePH.bind(this);
		this.handleChangeBN = this.handleChangeBN.bind(this);
		this.handleChangeAD = this.handleChangeAD.bind(this);
		this.handleChangeNO = this.handleChangeNO.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChangeFN(event) {
		console.log(event)
    this.setState({FNAME: event.target.FNAME});
	}
	handleChangeLN(event) {
    this.setState({LNAME: event.target.LNAME});
	}
	handleChangeEM(event) {
    this.setState({EMAIL: event.target.EMAIL});
	}
	handleChangePH(event) {
    this.setState({PHONE: event.target.PHONE});
	}
	handleChangeBN(event) {
    this.setState({MMERGE6: event.target.MMERGE6});
	}
	handleChangeAD(event) {
    this.setState({MMERGE3: event.target.MMERGE3});
	}
	handleChangeNO(event) {
    this.setState({MMERGE5: event.target.MMERGE5});
	}
	handleSubmit(event) {
    event.preventDefault();
	}
	
	render() {
		return (
			<section className="section has-text-centered has-background-light" id="businessform">
				{/*VIEW ON DESTOP AND TAB*/}
				<div className="container box is-6">
					<div className="has-text-centered-desktop">
						<h1 className="title "> Love your business? </h1>
						<p className="has-text-centered-desktop">Cashbac is helping business across the country understand how their digital promotions are impacting offline sales. Let's connect and find out how we can help you.</p>
					</div>
					<br />
					<div id="mc_embed_signup" style={{ StyleForm }}>
						<form onSubmit={this.handleSubmit} action="https://cashbac.us17.list-manage.com/subscribe/post?u=3f44c3c094349bbc733eb377c&amp;id=89d454641c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
							<div id="mc_embed_signup_scroll">
								<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
								<div className="mc-field-group">
									<label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span>
									</label>
									<input value={this.state.FNAME} onChange={this.handleChangeFN} type="text" name="FNAME" className="required" id="mce-FNAME" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-LNAME">Last Name </label>
									<input value={this.state.LNAME} onChange={this.handleChangeLN} type="text" name="LNAME" className="" id="mce-LNAME" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span>
									</label>
									<input value={this.state.EMAIL} onChange={this.handleChangeEM} type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
								</div>
								<div className="mc-field-group size1of2">
									<label htmlFor="mce-PHONE">Phone Number <span className="asterisk">*</span>
									</label>
									<input value={this.state.PHONE} onChange={this.handleChangePH} type="text" name="PHONE" className="required" id="mce-PHONE" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-MMERGE6">Brand Name <span className="asterisk">*</span>
									</label>
									<input value={this.state.MMERGE6} onChange={this.handleChangeBN} type="text" name="MMERGE6" className="required" id="mce-MMERGE6" />
								</div>
								<div className="mc-field-group">
									<label htmlFor="mce-MMERGE3">Company Address </label>
									<input value={this.state.MMERGE3} onChange={this.handleChangeAD} type="text" name="MMERGE3" className="" id="mce-MMERGE3" />
								</div>
								<div className="mc-field-group size1of2">
									<label htmlFor="mce-MMERGE5">Number Of Outlet </label>
									<input value={this.state.MMERGE5} onChange={this.handleChangeNO} type="number" name="MMERGE5" className="" id="mce-MMERGE5" />
								</div>
								<div className="mc-field-group input-group">
									<strong>Newsletter </strong>
									<ul>
										<li>
											<input value={this.state.value} onChange={this.handleChange} type="checkbox" value="1" name="group[3][1]" id="mce-group[3]-3-0" /><label htmlFor="mce-group[3]-3-0">Sign
												up to receive our newsletter and exclusive resources.</label>
										</li>
									</ul>
								</div>
								<div id="mce-responses" className="clear">
									<div className="response" id="mce-error-response" style={{ 'display':'none' }}></div>
									<div className="response" id="mce-success-response" style={{ 'display':'none' }}></div>
								</div>
								<div style={{ 'position': 'absolute', 'left': '-5000px' }} aria-hidden="true">
									<input type="text" name="b_3f44c3c094349bbc733eb377c_89d454641c /" tabIndex="-1" />
									</div>
								<div className="clear">
									<input type="submit" value="Join Us" name="subscribe" id="mc-embedded-subscribe" className="button" />
								</div>
							</div>
						</form>
					</div>

							{/*
								
								<div className="field">
									<label className="label">First Name</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g Jepri"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Last Name</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g Sinaga"/>
									</div>
								</div>

								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input className="input" type="email" placeholder="e.g. jeprisinaga@gmail.com"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Phone Number</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g. 08118808802"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Company Name</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g. PT Air Dive Alor"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Company Address</label>
									<div className="control">
										<textarea className="textarea" placeholder="e.g. Jalan Timor no. 6 Gondangdia"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Number of Outlets</label>
									<div className="control">
										<input className="input" type="number" placeholder="e.g. 1-10"/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<label className="checkbox">
											<input type="checkbox"/>
											Sign up to receive our newsletter and exclusive resources. 
										</label>
									</div>
								</div>
								<div className="control has-text-centered">
										<button className="button is-info is-rounded">Join Now</button>
								</div>
								
							</div>
							<div className="container is-6 is-hidden-desktop is-hidden-tablet">
							<div className="has-text-centered-desktop">
							<h1 className="title "> Love your business? </h1>
							<p className="has-text-centered-desktop">
							Cashbac is helping business across the country understand how their digital promotions are impacting offline sales.
							Let's connect and find out how we can help you.
							</p>
							</div>
							<br />
								<div className="field">
									<label className="label">First Name</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g Jepri"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Last Name</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g Sinaga"/>
									</div>
								</div>

								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input className="input" type="email" placeholder="e.g. jeprisinaga@gmail.com"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Phone Number</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g. 08118808802"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Company Name</label>
									<div className="control">
										<input className="input" type="text" placeholder="e.g. PT Air Dive Alor"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Company Address</label>
									<div className="control">
										<textarea className="textarea" placeholder="e.g. Jalan Timor no. 6 Gondangdia"/>
									</div>
								</div>
								<div className="field">
									<label className="label">Number of Outlets</label>
									<div className="control">
										<input className="input" type="number" placeholder="e.g. 1-10"/>
									</div>
								</div>
								<div className="field">
									<div className="control">
										<label className="checkbox">
											<input type="checkbox"/>
											Sign up to receive our newsletter and exclusive resources. 
										</label>
									</div>
								</div>
								<div className="control has-text-centered">
										<button className="button is-info is-rounded">Join Now</button>
								</div>
								*/ }
				</div>
			</section>
		)
	}
}
export default Businessform;

