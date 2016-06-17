import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({currentFilter, onFilterChange}) => (
  <p>
    Show:
    {" "}
    <FilterLink currentFilter={currentFilter} filter="SHOW_ALL" onLinkClick={() => onFilterChange('SHOW_ALL')}>
      All
    </FilterLink>
    {" "}
    <FilterLink currentFilter={currentFilter} filter="SHOW_ACTIVE" onLinkClick={() => onFilterChange('SHOW_ACTIVE')}>
      Active
    </FilterLink>
    {" "}
    <FilterLink currentFilter={currentFilter} filter="SHOW_COMPLETED" onLinkClick={() => onFilterChange('SHOW_COMPLETED')}>
      Completed
    </FilterLink>
  </p>
)

export default Footer;
