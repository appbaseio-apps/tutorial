import React from 'react';
import { Layout } from 'antd';
import Logo from './Logo';
import headerStyles from './styles';

const { Header } = Layout;

const FullHeader = function () { //eslint-disable-line
  return (
    <Header className={headerStyles}>
      <div className="row">
        <Logo />
      </div>
    </Header>
  );
};

export default FullHeader;
