/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Introduction from './screens/Introduction';
import Search from './screens/Search';
import Facets from './screens/Facets';
import SampleDataset from './screens/SampleDataset';
import { onboardingStyles } from './styles';

const screens = {
	0: Introduction,
	1: SampleDataset,
	2: Search,
	3: Facets,
	// 4: AppbaseFeatures,
};

export default class Tutorial extends Component {
	state = { //eslint-disable-line
		currentScreen: 0,
		totalScreen: 5,
		// eslint-disable-next-line
		thresholdScreen: 0, // to maintain the max threshold reached by currentScreen
		searchFields: [],
		facetFields: [],
		newApp: {
			id: 'movies-demo-app',
			name: 'Movies Dataset',
			description:
				'A dataset of 10,000 movies obtained from TMDB. This is ideal to experiment with SaaS use-cases.',
			url: 'https://www.themoviedb.org/t/p/w1280/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
			alt: 'movies-image',
			count: '10,000',
		},
	};

	nextScreen = () => {
		this.setState((state) => {
			const currentScreen = state.currentScreen + 1 < state.totalScreen
				? state.currentScreen + 1
				: state.currentScreen;

			return {
				...state,
				currentScreen,
				thresholdScreen: currentScreen,
			};
		});
	};

	previousScreen = () => {
		this.setState((state) => {
			const currentScreen = state.currentScreen - 1 >= 0 
				? state.currentScreen - 1
				: state.currentScreen;

			return {
				...state,
				currentScreen,
				thresholdScreen:
					state.thresholdScreen < state.currentScreen
						? state.currentScreen
						: state.thresholdScreen,
			};
		});
	};

	setScreen = (currentScreen) => {
		this.setState((state) => ({
			...state,
			currentScreen:
				currentScreen <= state.thresholdScreen ? currentScreen : state.currentScreen,
		}));
	};

	setSearchFields = (searchFields) => {
		this.setState({
			searchFields,
		});
	};

	setFacetFields = (facetFields) => {
		this.setState({
			facetFields,
		});
	};

	setAppName = (newApp) => {
		this.setState({
			newApp,
		});
	};

	skipTutorial = () => {
		const { history } = this.props;
		localStorage.setItem('hasVisitedTutorial', true);
		history.push('/');
	};

	renderCurrentScreen = () => {
		const {
 currentScreen, newApp, searchFields, facetFields,
} = this.state;
		const RenderScreen = screens[currentScreen];
		let props = {};

		if (currentScreen === 0) {
			props = {
				setAppName: this.setAppName,
			};
		} else if (currentScreen === 1) {
			props = {
				selectedApp: newApp,
			};
		} else if (currentScreen === 2) {
			props = {
				setSearchFields: this.setSearchFields,
				searchFields,
				app: newApp.id,
			};
		} else if (currentScreen === 3) {
			props = {
				setFacetFields: this.setFacetFields,
				facetFields,
				searchFields,
				app: newApp.id,
			};
		} else {
			props = {
				facetFields,
				searchFields,
				app: newApp.id,
			};
		}

		return (
			<RenderScreen
				nextScreen={this.nextScreen}
				previousScreen={this.previousScreen}
				setAppName={this.setAppName}
				{...props} //eslint-disable-line
			/>
		);
	};

	render() {
		const { currentScreen, totalScreen } = this.state;
		const { showSkipTutorialButton } = this.props;
		return (
			<div className={onboardingStyles}>
				<div className="left">
					<header>
						<span>STEPS</span>
						<span>
							{currentScreen + 1} of {totalScreen}
						</span>
					</header>
					<div className="meter">
						<div
							className="color"
							style={{
								width: `${((currentScreen + 1) * 100) / totalScreen}%`,
							}}
						/>
					</div>
					<ul>
						<li>
							<a className={currentScreen === 0 ? 'active' : null}>Select your app</a>
						</li>
						<li>
							<a
								className={currentScreen === 1 ? 'active' : null}
								onClick={() => this.setScreen(1)}
							>
								Sample Data
							</a>
						</li>
						<li>
							<a
								className={currentScreen === 2 ? 'active' : null}
								onClick={() => this.setScreen(1)}
							>
								Set searchable fields
							</a>
						</li>
						<li>
							<a
								className={currentScreen === 3 ? 'active' : null}
								onClick={() => this.setScreen(2)}
							>
								Set aggregation fields
							</a>
						</li>
						<li>
							<a
								className={currentScreen === 4 ? 'active' : null}
								onClick={() => this.setScreen(3)}
							>
								Demo and next steps
							</a>
						</li>
					</ul>
				</div>
				<div className="right">
					{showSkipTutorialButton && (
						<button
							type="button"
							className="skip-link"
							onClick={this.skipTutorial}
							data-cy="skip-tutorial"
						>
							&#10005; &nbsp; Skip Tutorial
						</button>
					)}
					<div className="container">{this.renderCurrentScreen()}</div>
				</div>
			</div>
		);
	}
}

Tutorial.propTypes = {
	history: PropTypes.object.isRequired,
	showSkipTutorialButton: PropTypes.bool,
};

Tutorial.defaultProps = {
	showSkipTutorialButton: false,
};
