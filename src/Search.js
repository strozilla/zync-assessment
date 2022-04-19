import { React, useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";

import StudentCard from "./StudentCard";
import TagSearch from "./TagSearch";
import {newTagContext} from './NewTag'


const Search = ({ students }) => {
  const [searchStudent, setSearchStudent] = useState("");
  const [filteredStudent, setFilteredStudent] = useState([]);
  const tags = useContext(newTagContext)

  const searchInput = (searchValue) => {
    setSearchStudent(searchValue);
    if (searchStudent !== "") {
      console.log(searchValue);
      const findStudent = students.filter((student) => {
        return Object.values(student)
          .join("")
          .toLowerCase()
          .includes(searchStudent.toLowerCase());
      });
      setFilteredStudent(findStudent);
      console.log(findStudent);
    } else setFilteredStudent(students);
  };

  return (
    <div>
      <newTagContext.Provider value={tags}>
        <TagSearch tags={tags}/>
      <div className="mx-4">
        <div class="mb-3 ">
          <label htmlFor="search" className="form-label"></label>
          <input
            onChange={(e) => searchInput(e.target.value)}
            type="text"
            className="form-control"
            id="searchBar"
            placeholder="Find By Name"
          />
          
        </div>
      </div>
      <Row xs={1} className="mx-auto">
      {searchStudent.length > 1
        ? filteredStudent.map((student) => {
            return (
              <Col key={student.id}>
                <StudentCard student={student} />
              </Col>
            );
          })
        : students.map((student) => {
            return (
              <Col key={student.id}>
                <StudentCard student={student} />
              </Col>
            );
          })}
        </Row>
        </newTagContext.Provider>
    </div>
  );
};

export default Search;
