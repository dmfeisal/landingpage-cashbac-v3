
/* eslint-disable */
import React from 'react';
import signupMockup from '../images/mockup/sign-up@2x.png';
import linkcardMockup from '../images/mockup/link-card@2x.png';
import enterpinMockup from '../images/mockup/enter-pin@2x.png';
import exploreMockup from '../images/mockup/explore@2x.png';
import taptopayMockup from '../images/mockup/tap-to-pay@2x.png';
import getcashbackMockup from '../images/mockup/get-cashback@2x.png';



import './style.scss';
import Emoji from './emoji';

const Workstab2 = () => (
	<div>
		<section id="works" class="section is-platform is-medium">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-12 is-10-fullhd">
						<div class="columns is-vcentered">
							<div class="column is-6">
								<div class="section-header">
									<h2 class="title is-2 is-spaced">A platform for families</h2>
									<p class="subtitle is-4">We deeply care about captivating stories - Bedtime Stories is built to help you tell better stories and helps you engage with your family through storytelling.</p>
								<hr class="spacer is-3"></hr>
								</div>
								
								<div class="section-body">
									<div class="vertical-tabs">
                        <a class="tab is-active" data-anchor="step#explore" href="#">
                           <h3 class="title is-4"> Growing collection of Storyworlds </h3>
                           <p class="subtitle"> Explore exciting Storyworlds in every imaginable genre for storytellers, readers and listeners from young to old. </p>
                        </a>
                        <a class="tab" data-anchor="step#storyworld" href="#">
                           <h3 class="title is-4"> Stories to fall in love with </h3>
                           <p class="subtitle"> Storyworlds are growing collections of thematically-related stories written by authors from around the world. </p>
                        </a>
                        <a class="tab" data-anchor="step#school" href="#">
                           <h3 class="title is-4"> Become a better storyteller </h3>
                           <p class="subtitle"> Join the Storytelling School for families to learn important storytelling techniques. </p>
                        </a>
                        <a class="tab" data-anchor="step#storybuilder" href="#">
                           <h3 class="title is-4"> Endless source of storylines </h3>
                           <p class="subtitle"> Interactively create your very own adventures - generate millions of hilarious stories in your genre of choice. </p>
                        </a>
                     </div>
									<hr class="spacer is-3"></hr>
									<a class="app-store-badge is-large" href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548" target="_blank" rel="noopener">
									<img role="presentation" src="/assets/images/icons/app-store-badge-52d5e257.svg?1547214151" /></a></div>
								</div>

								<div class="column is-6 align-self-stretch">
									<div class="section-media">
										<div class="screens">
											<div class="screen is-active" data-source="step#explore" href="#">
												<img role="presentation" src={signupMockup} />
											</div>
											<div class="screen" data-source="step#storyworld" href="#">
												<img role="presentation" src={linkcardMockup} />
											</div>
											<div class="screen" data-source="step#school" href="#">
												<img role="presentation" src={enterpinMockup} />
											</div>
											<div class="screen" data-source="step#storybuilder" href="#">
												<img role="presentation" src={taptopayMockup} />
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>



	</div>
);

export default Workstab2;
