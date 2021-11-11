/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const Footer = ({ previousScreen, disabled, app, label, nextScreen }) => (
	<footer>
		<div className="left-column">
			{previousScreen ? (
				<a
					className="button has-icon"
					style={{ marginRight: 16 }}
					onClick={previousScreen}
					data-cy="goto-previous-step"
				>
					<Icon type="left" theme="outlined" /> &nbsp; Previous
				</a>
			) : null}
			{label === 'Finish' ? (
				<a
					className={`button has-icon ${disabled ? 'disabled' : ''}`}
					href={`/finish?app=${app}`}
					data-cy="finish-tutorial"
				>
					Finish &nbsp; <Icon type="right" theme="outlined" />
				</a>
			) : (
				<a
					className={`button has-icon ${disabled ? 'disabled' : ''}`}
					onClick={() => {
						if (!disabled) nextScreen();
					}}
					data-cy="goto-next-step"
				>
					{label || 'Next'} &nbsp; <Icon type="right" theme="outlined" />
				</a>
			)}
		</div>
	</footer>
);

Footer.propTypes = {
	previousScreen: PropTypes.func,
	disabled: PropTypes.bool,
	app: PropTypes.string.isRequired,
	label: PropTypes.string,
	nextScreen: PropTypes.func,
};

Footer.defaultProps = {
	previousScreen: null,
	disabled: false,
	label: 'Next',
	nextScreen: () => {},
};

export default Footer;
