import { React, useState } from 'react'

import NewTag from './NewTag';


const TagSearch = (tags) => {
  const [searchTag, setSearchTag] = useState("");
  const [filteredTag, setFilteredTag] = useState([]);
 

  const searchTagInput = (searchTagValue) => {
    setSearchTag(searchTagValue);
    if (searchTag !== "") {
      console.log(searchTagValue);
      const findTag = tags.filter((tag) => {
        return Object.values(tag)
          .join("")
          .toLowerCase()
          .includes(searchTag.toLowerCase());
      });
      setFilteredTag(findTag);
      console.log(findTag);
    } else setFilteredTag(tags);
  };

  return (
    <div>
      
      <div className="mx-4">
        <div class="mb-3 ">
          <label htmlFor="search" className="form-label"></label>
          <input
            onChange={(e) => searchTagInput(e.target.value)}
            type="text"
            className="form-control"
            id="searchBar"
            placeholder="Find By Tag"
          />
        </div>
      </div>
      
      
      {/*searchTag.length > 1
        ? filteredTag.map((tag) => {
            return (
              <div key={tag.value}>
                <NewTag />
              </div>
            );
          })
        : tags.map((tag) => {
            return (
              <div key={tag.value}>
                <NewTag />
              </div>
            );
          })*/}
        
    </div>
  )
}

export default TagSearch