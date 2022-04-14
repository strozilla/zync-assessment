import { useEffect, useState} from 'react';
import { Row, Col, Container } from 'react-bootstrap'

import StudentCard from './StudentCard';
import './App.css';

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
    <Container>
      <Row xl={1} className="mx-auto">

        {students.map((student) => {

          return (

            <Col key={student.id}>
              <StudentCard student={student}/>
             </Col>  
           )
        })}
      </Row>
    </Container>
  );
}

export default App;
