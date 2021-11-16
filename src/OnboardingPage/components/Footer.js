/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import generateSandboxURL from '../../CodeSandbox/sandbox-generator';

const Footer = function ({ // eslint-disable-line
  previousScreen, disabled, app, label, nextScreen, searchFields, facetFields, history,
}) {
  let codesandboxURL = '';
  useEffect(() => {
    codesandboxURL = generateSandboxURL({
      app, searchFields, facetFields,
    });
  }, [searchFields, facetFields]);

  function handleClick() {
    history.push({
      pathname: '/finish',
      search: `?app=${app}`,
      state: {
			   url: codesandboxURL,
      },
    });
  }

  return (
    <footer>
      <div className="left-column">
        {previousScreen ? (
          <a
            className="button has-icon"
            style={{ marginRight: 16 }}
            onClick={previousScreen}
            data-cy="goto-previous-step"
          >
            <LeftOutlined />
            {' '}
&nbsp; Previous
          </a>
        ) : null}
        {label === 'Finish' ? (
          <a
            className={`button has-icon ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            data-cy="finish-tutorial"
          >
            Finish &nbsp;
            {' '}
            <RightOutlined />
          </a>
        ) : (
          <a
            className={`button has-icon ${disabled ? 'disabled' : ''}`}
            onClick={() => {
						  if (!disabled) nextScreen();
            }}
            data-cy="goto-next-step"
          >
            {label || 'Next'}
            {' '}
            <RightOutlined />
          </a>
        )}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  previousScreen: PropTypes.func,
  disabled: PropTypes.bool,
  app: PropTypes.string.isRequired,
  label: PropTypes.string,
  nextScreen: PropTypes.func,
  searchFields: PropTypes.array,
  facetFields: PropTypes.array,
  history: PropTypes.object.isRequired,
};

Footer.defaultProps = {
  previousScreen: null,
  disabled: false,
  label: 'Next',
  nextScreen: () => {},
  facetFields: [],
  searchFields: [],
};

export default withRouter(Footer);
