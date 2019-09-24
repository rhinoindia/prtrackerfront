import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  state={};

  render() {
    const { onHandleChange } = this.props;
    return (
      <div className="filter-sec">
        <div className="filters">
          <span>Components: </span>
          <select
            onClick={onHandleChange}
            name="component"
            className="dropdown"
          >
            <option value="all" className="dropdown-option">All</option>
            <option value="rhinofront" className="dropdown-option">Rhinofront</option>
            <option value="rhinoapi" className="dropdown-option">RhinoApi</option>
            <option value="rhinostyle" className="dropdown-option">RhinoStyle</option>
            <option value="rhinoaudit" className="dropdown-option">RhinoAudit</option>
            <option value="rhinoaudit-client" className="dropdown-option">RhinoAudit-Client</option>
            <option value="rhinopay" className="dropdown-option">RhinoPay</option>
            <option value="rhinomatic" className="dropdown-option">RhinoMatic</option>
            <option value="rhinotilities" className="dropdown-option">Rhinotilities</option>
            <option value="rhinocron" className="dropdown-option">Rhinocron</option>
          </select>
        </div>
        <div className="filters">
          <span>Status: </span>
          <select
            onClick={onHandleChange}
            name="status"
            className="dropdown"
          >
            <option value="open" className="dropdown-option">Open</option>
            <option value="closed" className="dropdown-option">Closed</option>
            <option value="all" className="dropdown-option">All</option>
          </select>
        </div>
      </div>
    );
  }
}


Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export default Filter;
