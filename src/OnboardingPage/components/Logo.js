import React from 'react';
import { number, string } from 'prop-types';
import appbaseSvg from '../images/appbase.svg';

const Logo = ({ width }) => {
	return <img src={appbaseSvg} width={width} alt="appbase.io" />;
};

Logo.defaultProps = {
	width: 140,
};

Logo.propTypes = {
	width: number,
};

export default Logo;
