import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class Sort extends Component {
  render() {
    const { value, updateData, sortDirection, updateDirection } = this.props;
    return (
      <div className="sort">
        <Select
          onChange={e => {
            updateData(e.target.value);
          }}
          value={value}
        >
          <MenuItem value={'id'}>Sort by id</MenuItem>
          <MenuItem value={'username'}>Sort by name</MenuItem>
          <MenuItem value={'email'}>Sort by email</MenuItem>
          <MenuItem value={'status'}>Sort by status</MenuItem>
        </Select>
        <div className="sortBy">
          {sortDirection === 'asc' ? (
            <i
              onClick={() => updateDirection('desc')}
              className="fas fa-arrow-down"
            />
          ) : (
            <i
              onClick={() => updateDirection('asc')}
              className="fas fa-arrow-up"
            />
          )}
        </div>
      </div>
    );
  }
}
