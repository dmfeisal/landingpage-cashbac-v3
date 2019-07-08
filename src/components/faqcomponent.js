import React from 'react';
import faqList from '../data/faq.json';

const faqTemplate = faqList.map((item, key) => 
	<div className={key} key={key.toString()}>
		<a className="faq" href={`#${item.title.replace(/ /g , '-')}`} rel="_self" title="{item.title}" >{item.title}</a>
		<div>
			{item.detail}
		</div>
		<hr className="spacer is-2"></hr>
	</div>
)

const Privacycomponent = () => (
	<section id="faqpage" className="section">
		<div className="content container">
			<hr className="spacer is-2"></hr>
			<h2 className="title">Frequently Asked Questions (FAQ)</h2>
			<h2 className="margin--medium-a">A guide to Cashbac</h2>
			<hr className="spacer is-2"></hr>
			{faqTemplate}
		</div>
	</section>
);

export default Privacycomponent;
