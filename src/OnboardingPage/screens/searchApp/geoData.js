import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
import {
	RangeSlider,
	MultiList,
	DataSearch,
	ReactiveBase,
	ReactiveList,
	SelectedFilters,
	RangeInput,
} from '@appbaseio/reactivesearch';
import { ReactiveOpenStreetMap } from '@appbaseio/reactivemaps';
import { URL } from '../../utils/constants';

const statStyles = css`
	max-width: none;
	margin: 30px 0 0;
	font-size: 16px;
	margin-bottom: 10px;
	line-height: 16px;
	text-align: right;
`;

const renderFilters = (fields) => {
	if (fields && fields.length) {
		return fields.map((field) => {
			switch (field) {
				case 'magnitude': {
					return (
						<RangeSlider
							componentId={field}
							dataField={field}
							key={field}
							title="Magnitude (Richter)"
							filterLabel="Magnitude"
							showHistogram
							rangeLabels={{
								start: '0.0',
								end: '10.0',
							}}
						/>
					);
				}
				case 'year': {
					return (
						<RangeInput
							componentId={field}
							dataField={field}
							key={field}
							title="Year"
							filterLabel="Year"
							showHistogram
							range={{
								start: 1970,
								end: 2017,
							}}
						/>
					);
				}
				case 'place': {
					return (
						<MultiList
							key={field}
							componentId={field}
							dataField="place.keyword"
							title="Places"
							filterLabel="Places"
							size={15}
							sortBy="count"
							react={{
								and: ['search', 'year', 'magnitude'],
							}}
							showSearch={false}
						/>
					);
				}
				default:
					return null;
			}
		});
	}
	return null;
};

const getFields = (fields, suffix) => {
	let newFields = [];
	fields.forEach((item) => {
		suffix.forEach((str) => {
			newFields = [...newFields, `${item}${str}`];
		});
	});
	return newFields;
};

const getWeights = (fields) => {
	const weights = {
		place: 10,
		'place.raw': 10,
		'place.search': 2,
	};

	return fields.map((item) => weights[item]);
};

const renderResultList = () => {
	const mapProps = {
		dataField: 'location',
		defaultMapStyle: 'Light Monochrome',
		title: 'Reactive Maps',
		defaultZoom: 6,
		size: 10,
		style: { zIndex: 0 },
		react: {
			and: ['place', 'search', 'year', 'magnitude'],
		},
		onPopoverClick: (item) => <div>{item.place}</div>,
		showMapStyles: true,
		renderData: (result) => ({
			custom: (
				<div
					style={{
						background: 'dodgerblue',
						color: '#fff',
						paddingLeft: 5,
						paddingRight: 5,
						borderRadius: 3,
						padding: 10,
					}}
				>
					<i className="fas fa-globe-europe" />
					&nbsp;{result.magnitude}
				</div>
			),
		}),
	};
	return (
		<div style={{ margin: 10 }}>
			<ReactiveOpenStreetMap
				componentId="googleMap"
				{...mapProps} // eslint-disable-line
				renderAllData={(
					hits,
					loadMore,
					renderMap,
					renderPagination,
					triggerClickAnalytics,
					meta,
				) => (
					<>
						<div css={statStyles}>
							{meta?.resultStats?.numberOfResults} results found in{' '}
							{meta?.resultStats?.time}ms
						</div>
						{renderMap()}
					</>
				)}
			/>
		</div>
	);
};

const renderJSONList = () => (
	<ReactiveList
		componentId="results"
		dataField="name"
		react={{
			and: ['search', 'magnitude', 'year', 'place'],
		}}
		size={4}
		renderItem={(res) => (
			<pre
				key={res._id}
				style={{
					background: 'rgba(239,239,239,.4)',
					padding: '15px 20px',
					color: '#424242',
					borderRadius: '5px',
				}}
			>
				{JSON.stringify(res, null, 2)}
			</pre>
		)}
		className="right-col"
		innerClass={{
			listItem: 'list-item',
			resultStats: 'result-stats',
		}}
		pagination
		stream
	/>
);

const renderCode = (lib) => {
	switch (lib) {
		case 'react':
			return renderResultList();
		case 'raw_json':
			return renderJSONList();
		default:
			return renderResultList();
	}
};

class GeoSearchApp extends Component {
	constructor(props) {
		super(props);
		this.appConfig = {};
	}

	render() {
		const {
 facets, fields: fieldsProp, ui, app,
} = this.props;
		const fields = getFields(fieldsProp, ['', '.search']);
		const SCALR_API = URL;

		return (
			<ReactiveBase
				{...this.appConfig} // eslint-disable-line
				app={app}
				url={SCALR_API}
				enableAppbase
				className="search-app"
				mapKey="AIzaSyA9JzjtHeXg_C_hh_GdTBdLxREWdj3nsOU"
				theme={{
					colors: {
						primaryColor: '#FF307A',
					},
				}}
				style={{
					backgroundColor: '#fff',
					padding: '40px',
					borderRadius: '2px',
					textAlign: 'left',
				}}
			>
				<header>
					<h2>
						The Geo Data{' '}
						<span role="img" aria-label="books">
							🌎
						</span>
					</h2>
					<DataSearch
						componentId="search"
						dataField={fields}
						showIcon={false}
						placeholder="Search for places..."
						autosuggest={false}
						filterLabel="Search"
						fieldWeights={getWeights(fields)}
						highlight
						style={{
							maxWidth: '400px',
							margin: '0 auto',
						}}
					/>
				</header>

				<SelectedFilters style={{ marginTop: 20 }} showClearAll={false} />

				<div className={facets && facets.length ? 'multi-col' : ''}>
					<div className="left-col">{renderFilters(facets)}</div>
					<div style={{ width: facets && facets.length ? '70%' : '100%' }}>
						{renderCode(ui)}
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

GeoSearchApp.propTypes = {
	facets: PropTypes.array,
	fields: PropTypes.array,
	ui: PropTypes.string,
	app: PropTypes.string.isRequired,
};

GeoSearchApp.defaultProps = {
	facets: [],
	fields: [],
	ui: undefined,
};

export default GeoSearchApp;
