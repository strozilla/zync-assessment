import { useEffect, useState} from 'react';
import { Row, Col, Container } from 'react-bootstrap'


//components
import StudentCard from './StudentCard';
import Search from './Search'

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

  if(!students) return <h3>Loading...</h3>
  return (
    <div className='mx-4'>
      <Search />
      <Row xs={1} className="mx-auto">

        {students.map((student) => {

          return (

            <Col key={student.id}>
              <StudentCard student={student}/>
             </Col>  
           )
        })}
      </Row>
    </div>
  );
}

export default App;
