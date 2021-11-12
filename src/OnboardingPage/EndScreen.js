/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import { endScreenStyles } from './styles';
import FullHeader from './components/FullHeader';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import trophyPng from './images/finish-screen/Trophy.png';
import trophyPng2 from './images/finish-screen/Trophy@2x.png';
import webAppPng from './images/finish-screen/Webapp.png';
import webApp2 from './images/finish-screen/Webapp@2x.png'
import groupPng from './images/finish-screen/Group@3x.svg';
import reactNativeSvg from './images/finish-screen/ReactiveNative.svg';
import mapsSvg from './images/finish-screen/ReactiveMaps.svg';
import apiSvg from './images/finish-screen/api@3x.svg';

function EndScreen({ location }) {
	function generateCodeSandbox() {
		return location.state.url;
	}

	const csbURL = generateCodeSandbox();
	return (
		<Layout>
			<FullHeader />
			<div className={endScreenStyles}>
				<div className="container">
					<div className="banner-row">
						<div className="big-card">
							<h2>Share what you've built</h2>

							<div>
								<div className="col">
									<img
										src={trophyPng}
										srcSet={`${trophyPng} 245w, ${trophyPng2} 490w`}
										alt="Trophy"
									/>
									<p>
										You
										{"'"}
										ve finished the tutorial.
									</p>
								</div>

								<div className="col">
									<img
										style={{
											width: '150px',
										}}
										src={webAppPng}
										srcSet={`${webAppPng} 245w, ${webApp2} 490w`}
										alt="Webapp"
									/>
									<h3>Open the app you just built in codesandbox.io</h3>
									<div>
									{/* {csbURL && ( */}
										<div className="header-card">	
											<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
												<div className="overflow-text">{csbURL}</div>
												<CopyToClipboard text={csbURL}>
													<Icon type="copy" theme="outlined" className="icon-active" />
												</CopyToClipboard>
											</div>
										</div>
									{/* )} */}
									</div>
								</div>
							</div>
						</div>
						<div className="small-card">
							<h2>WEB APP</h2>

							<img
								style={{
									width: '150px',
									margin: '40px auto 20px',
								}}
								src={webAppPng}
								srcSet={`${webAppPng} 245w, ${webApp2} 490w`}
								alt="Webapp"
							/>
							<h3>Learn how to build a web app</h3>
							<p>
								appbase.io UI components for building data-driven web apps.
							</p>
							<a
								target="_blank"
								rel="noreferrer"
								className="button"
								href="https://docs.appbase.io/docs/reactivesearch/v3/overview/quickstart/"
							>
								Get Started
							</a>	
						</div>
					</div>

					<div className="card-row">
						<div className="card">
							<h2>MOBILE APP</h2>
							<img
								src={reactNativeSvg}
								alt="Reactive search"
							/>
							<p>appbase.io UI components for building mobile apps.</p>
							<a
								className="button"
								target="_blank"
								rel="noreferrer"
								href="https://docs.appbase.io/docs/reactivesearch/react-native-searchbox/quickstart/"
							>
								Learn More
							</a>
						</div>
						<div className="card">
							<h2>MAPS APP</h2>
							<img
								src={mapsSvg}
								alt="Reactive maps"
							/>
							<p>appbase.io UI components for building realtime geolocation apps.</p>
							<a
								className="button"
								target="_blank"
								rel="noreferrer"
								href="https://docs.appbase.io/docs/reactivesearch/v3/overview/reactivemaps/"
							>
								Learn More
							</a>
						</div>
						<div className="card">
							<h2>APIs</h2>
							<img
								width="100px"
								style={{ margin: '40px 0px 55px' }}
								src={apiSvg}
								alt="API"
							/>
							<p>
								Get started with the APIs for indexing, querying and searching data
								with appbase.
							</p>
							<a
								className="button"
								target="_blank"
								rel="noreferrer"
								href="https://docs.appbase.io/api/examples/rest/"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default withRouter(EndScreen);
