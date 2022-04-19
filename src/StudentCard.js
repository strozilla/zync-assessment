import React from 'react'
import { Card, Button } from 'react-bootstrap'

import NewTag from './NewTag'

const StudentCard = ({ student }) => {
  
  function showGrades() {
    let showAllGrades = document.getElementById('allGrades')
     
    if (showAllGrades.style.display === '' || showAllGrades.style.display === 'none') {
      showAllGrades.style.display = 'inline-block'
    } else {
      showAllGrades.style.display = 'none'
    } 
  }
 

  return (
    <>
      <Card className={"d-flex flex-row flex-wrap border-0"}>
        <Card.Img className='m-2' src={student.pic} style={{width:'8em', height:'8em', border:'1px solid black', borderRadius:'100px'}} />

        <Card.Body>
          <Card.Title as='h1'><strong>{student.firstName + ` ` + student.lastName}</strong></Card.Title>
              <span style={{float:'right'}}>
                <Button onClick={(e) => showGrades(e.target.id)} type='button' style={{background:'none', border:'none'}}>
                <i className='fa fa-plus' style={{fontSize:'24px', color:'#b2b2b2'}}></i>       
                </Button>
              </span>
          <Card.Text className="ps-4" as='p'>Email: {student.email}</Card.Text>
          <Card.Text className="ps-4" as='p'>Company: {student.company}</Card.Text>
          <Card.Text className="ps-4" as='p'>Skill: {student.skill}</Card.Text>
          <Card.Text className="ps-4" as='p'>Average: {student.grades.reduce((a, b) => a + parseFloat(b), 0) / student.grades.length}</Card.Text>
            <div id='allGrades' style={{paddingLeft:'1.5rem', display:'none'}}>
                      {student.grades.map((grade, index) => {
                        return (
                    <>
                    <div className='d-flex flex-column justify-content-center'>Test {index + 1} {grade}</div>
                    
                    </>
                  )
                })}
          </div>
          
          <NewTag />
          
        </Card.Body>
      </Card>
      
      
    </>
  )
}

export default StudentCard