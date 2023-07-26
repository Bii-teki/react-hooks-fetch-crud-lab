import React from 'react'

function Filter({category, onCategoryChange}) {
  return (
    <div className='Filter'>
      <select
        name ="filter"
        value={category}
        onChange={(e)=>onCategoryChange(e.target.value)}
      />
      <option value="All"></option>
      <option value="All"></option>
      <option value="All"></option>
      <option value="All"></option>
    </div>
  )
}

export default Filter
