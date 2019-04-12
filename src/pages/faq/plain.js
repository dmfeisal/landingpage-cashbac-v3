import React from 'react';
import faqList from '../../data/faq.json';
import { Helmet } from "react-helmet";
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa';

class PlainFaq extends React.Component {
	handleClick (e) {
		e.preventDefault()
		let nav = e.currentTarget
		let popup = document.querySelector('.popup')
		let detail = nav.nextElementSibling.innerText
		let title = nav.innerText
		popup.querySelector('.content-popup .title').innerHTML = title
		popup.querySelector('.content-popup .detail').innerHTML = detail
		popup.classList.toggle('is-hidden')
		console.log(nav)
		console.log(detail, title)
	}
	handleClose (e) {
		e.preventDefault()
		let popup = document.querySelector('.popup')
		popup.classList.toggle('is-hidden')
	}
	render() {
		const faqTemplate = faqList.map((item, key) => 
			<div className={key} key={key.toString()}>
				<a  onClick={e => { this.handleClick(e) } } className="faq-plain" href={`#${item.title.replace(/ /g , '-')}`} rel="_self" title={item.title} >
					{item.title} <FaAngleRight className="icon"/>
				</a>
				<div className="is-hidden">
					{item.detail}
				</div>
				<hr className="spacer is-2"></hr>
			</div>
		)
		return(
			<div>
				<Helmet>
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
					<meta name="description" content="Your frequently asked questions about earning instant cashback rewards with Cashbac, all answered here" />
					<meta name="keywords" content="Cashbac earn instant Cashback, redeem cashback, Can I cash in my cashback to my bank account" />
					<title>Frequently Asked Questions (FAQ) | Cashbac App</title>
					<html lang="en" />
					{/* Google / Search Engine Meta Tags */}
					<meta itemprop="name" content="PT. Global Pay Indonesia" />
					<meta
						itemprop="description"
						content="Your frequently asked questions about earning instant cashback rewards with Cashbac, all answered here"
					/>
					<meta itemprop="image" content="https://dl.dropboxusercontent.com/s/yp5xezri84yv0bn/logo-cashbac.png" />
					<script type="text/javascript" src="https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js"></script>
					<link  rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
				</Helmet>
				<section id="faqpage" className="section">
					<div className="content container">
						<hr className="spacer is-2"></hr>
						<h2 className="title">Frequently Asked Questions (FAQ)</h2>
						<h2 className="margin--medium-a">A guide to Cashbac</h2>
						<hr className="spacer is-2"></hr>
						
						{faqTemplate}

						<div className="popup is-hidden">
							<a href="#back" className="button" title="Back to home" onClick={e => { this.handleClose(e)} } >
								<FaArrowLeft className="icon"/>
							</a>
							<div className="content tile content-popup">
								<a href="#detail-faq-title" rel="_self"className="title is-5 faq-plain" title="Title information fa	">link</a>
								<p className="detail"></p>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default PlainFaq;
