import { useEffect, useState} from 'react';



//components
import Search from './Search';



//css
import './App.css'


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
      <Search students={students}/>
    </div>
  );
}

export default App;
