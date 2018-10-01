import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_ACTIVE = "SHOW_ACTIVE";
let filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

@inject("store")
@observer
export class Controls extends Component {
  render() {
    const { visibilityFilter, setVisibilityFilter } = this.props.store.todosStore;

    return (
      <div className="controls">
        {
          filters.map(filter => {
            return <label
              key={filter}
              htmlFor={filter}
            >
              {filter}
              <input 
                type="checkbox" 
                name={filter}
                checked={visibilityFilter === filter}
                onChange={() => {
                  setVisibilityFilter(filter);
                }}
              />
            </label>
          })
        }
      </div>
    )
  }
}
