/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { LinkOutlined, CopyOutlined } from '@ant-design/icons';
import { endScreenStyles } from './styles';
import FullHeader from './components/FullHeader';
import trophyPng from './images/finish-screen/Trophy.png';
import trophyPng2 from './images/finish-screen/Trophy@2x.png';
import webAppPng from './images/finish-screen/Webapp.png';
import webApp2 from './images/finish-screen/Webapp@2x.png';
import reactNativeSvg from './images/finish-screen/ReactiveNative.svg';
import mapsSvg from './images/finish-screen/ReactiveMaps.svg';
import apiSvg from './images/finish-screen/api@3x.svg';

const EndScreen = function ({ location }) { //eslint-disable-line
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
							<h2>Share what you've built</h2> {/* eslint-disable-line */}

							<div style={{ width: '100%', marginTop: 15 }}>								
								<div>
									<div style={{ height: 190 }}>									
										<img
											src={trophyPng}
											srcSet={`${trophyPng} 245w, ${trophyPng2} 490w`}
											alt="Trophy"
											style={{ margin: 10 }}
										/>
									</div>
									<h3>Share the app you&apos;ve just built using codesandbox.io</h3>
									<div>										
										<div className="header-card">
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													gap: 10,
												}}
											>
												<div className="overflow-text">{csbURL}</div>
												<CopyToClipboard text={csbURL}>
													<CopyOutlined className="icon-active" style={{ fontSize: 18 }} />													
												</CopyToClipboard>
												<a
													target="_blank"
													rel="noreferrer"
													href={csbURL}
													style={{ height: 20 }}
												>
													<LinkOutlined
														style={{ fontSize: 18 }}
														className="icon-active" 														
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="small-card">
							<h2>WEB APP</h2>
							<div style={{ height: 150 }}>
								<img
									style={{
										width: '150px',
										margin: '40px auto 20px',
									}}
									src={webAppPng}
									srcSet={`${webAppPng} 245w, ${webApp2} 490w`}
									alt="Webapp"
								/>
							</div>					
							
							<h3>Learn how to build a web app</h3>
							<p>appbase.io UI components for building data-driven web apps.</p>
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
							<div style={{ height: 130 }}>
								<img src={reactNativeSvg} alt="Reactive search" />
							</div>
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
							<div style={{ height: 130 }}>
								<img src={mapsSvg} alt="Reactive maps" />
							</div>
							
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
							<div style={{ height: 130 }}>
								<img
									width="100px"
									style={{ margin: '40px 0px 55px' }}
									src={apiSvg}
									alt="API"
								/>
							</div>
							
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
};

EndScreen.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(EndScreen);
