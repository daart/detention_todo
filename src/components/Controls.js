import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from './../reducers/visibilityFilter';

const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_ACTIVE = "SHOW_ACTIVE";
const FILTERS = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

const ControlsComponent = ({ visibilityFilter, setVisibilityFilter }) => {
  return (
    <div className="controls">
      {
        FILTERS.map(filter => (
          <label htmlFor={filter}>
            {filter}:
            <input 
              type="checkbox"
              name={filter}
              checked={filter === visibilityFilter }
              onChange={(e) => setVisibilityFilter(filter)}  
            />
          </label>
        ))
      }
    </div>
  )
};

const mapStateToProps = ({ visibilityFilter }) => ({ visibilityFilter });

export const Controls = connect(mapStateToProps, { setVisibilityFilter })(ControlsComponent);
