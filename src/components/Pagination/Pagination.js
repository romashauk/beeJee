import React from 'react';
import cn from 'classnames';

function Pagination({ totalPages, activePage, onChange }) {
  const pages = Array.from(new Array(totalPages), (v, i) => i + 1);

  return (
    <div>
      {pages.map(i => (
        <button
          key={i}
          className={cn('page', { active: i === activePage })}
          onClick={() => onChange(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
