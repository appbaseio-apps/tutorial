/* eslint-disable jsx-a11y/no-autofocus,jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import Footer from '../components/Footer';
import { datsetMappings } from '../utils/constants';
import createSvg from "../images/Create.svg"

const { Option } = Select;

export default class Introduction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appName: 'movies-demo-app',
		};
	}

	handleChange = (data, appName) => {
		const { setAppName } = this.props;
		this.setState({
			appName: appName,
		})
		setAppName(data);
	}

	render() {
		const { nextScreen } = this.props;
		const { appName } = this.state;
		return (
			<div>
				<div className="wrapper">
					<div>
						<img src={createSvg} alt="create app" />
					</div>
					<div className="content">
						<header>
							<h2>Choose a sample dataset to import from</h2>
							<p>
								We will be using the appbase.io dashboard to import this dataset
								from.
							</p>
						</header>
						<div>
							{datsetMappings.map((data) => (
								<div
									className="dataset-container"
									style={{
										border:
											data.id === appName
												? '1px solid #1890ff'
												: 'none',
										background:
											data.id === appName
												? 'rgb(234, 245, 255)'
												: 'white',
									}}
									key={data.id}
									onClick={() => this.handleChange(data, data.id)}
								>
									<img
										src={data.url}
										alt={data.alt}
										style={{ height: '150px', width: '150px', margin: 20 }}
									/>
									<div>
										<h3>{data.name}</h3>
										<p>{data.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<Footer nextScreen={nextScreen}/>
			</div>
		);
	}
}

Introduction.propTypes = {
	nextScreen: PropTypes.func,
	setAppName: PropTypes.func.isRequired,
};

Introduction.defaultProps = {
	nextScreen: null,
};