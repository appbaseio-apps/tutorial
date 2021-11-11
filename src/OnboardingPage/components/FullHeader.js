import React from 'react';
import { Layout } from 'antd';
import Logo from './Logo'; 
import headerStyles from './styles';

const { Header } = Layout;

const FullHeader = () => (
	<Header className={headerStyles}>
		<div className="row">
			<Logo />
		</div>		
	</Header>
);

export default FullHeader;
