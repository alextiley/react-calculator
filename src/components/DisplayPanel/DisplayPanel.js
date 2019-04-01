import PropTypes from 'prop-types';
import React  from 'react';

import './DisplayPanel.css';

const DisplayPanel = ({ text }) => (
  <div className="display-panel qa-display-panel">
    {text}
  </div>
);

DisplayPanel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DisplayPanel;
