import { useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap'


//components
import StudentCard from './StudentCard';


import axios from 'axios'


const App = () => {
  
  const [students, setStudents] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.hatchways.io/assessment/students")
        console.log(res.data.students)
        setStudents(res.data.students)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
    
  }, [])

//Search Bar
 const [searchStudent, setSearchStudent] = useState("")
  const [filteredStudent, setFilteredStudent] = useState([])

  const searchInput = (searchValue) => {
    setSearchStudent(searchValue)
    if(searchStudent !== ''){
        console.log(searchValue)
        const findStudent = students.filter((student) => {
          return Object.values(student).join('').toLowerCase().includes(searchStudent.toLowerCase())
        })
        setFilteredStudent(findStudent)
      console.log(findStudent)
    } else (
      setFilteredStudent(students)
    )
  }


  if(!students) return <h3>Loading...</h3>
  return (
    <div className='mx-4'>
        <div class="mb-3 ">
          <label htmlFor="search" className="form-label"></label>
          <input onChange={(e) => searchInput(e.target.value)} type="text" className="form-control" id="searchBar" placeholder="Find By Name" />
        </div>
      <Row xs={1} className="mx-auto">
        {searchStudent.length > 1 ? (
          filteredStudent.map((student) => {
            return (
              <Col key={student.id}>
              <StudentCard student={student}/>
             </Col>  
            )
          })
        ) : (
            students.map((student) => {
              return (
                <Col key={student.id}>
                <StudentCard student={student}/>
                </Col>  
            )
        })
          )
        }
      </Row>
    </div>
  );
}

export default App;
