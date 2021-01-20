import React from 'react';
import PropTypes from 'prop-types';
//import './SixColGrid.css';
//import '../../styles.scss';

// create a functional component that will recieve props
// and that will return a div with the four col grid
const SixColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element">
          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">
        {renderElements()}
      </div>
    </div>
  )
}

SixColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default SixColGrid;