import React from 'react'

import './App.css'

const Search = () => {
  return (
    <div class="mb-3 ">
      <label for="search" class="form-label"></label>
      <input type="text" class="form-control" id="searchBar" placeholder="Find By Name" />
    </div>
  )
}

export default Search