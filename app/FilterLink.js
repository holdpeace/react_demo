import React from 'react';

const FilterLink = ({filter, currentFilter, onLinkClick, children}) => {
  if(currentFilter === filter) {
    return <span>{children}</span>;
  }
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onLinkClick();
       }}
    >
      {children}
    </a>
  )
}

export default FilterLink;
