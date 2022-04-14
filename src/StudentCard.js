import React from 'react'
import { Card } from 'react-bootstrap'

const StudentCard = ({ student }) => {
  return (

    <Card className={"d-flex flex-row flex-wrap border-0"}>
      <Card.Img className='m-4' src={student.pic} style={{width:'8em', height:'8em', border:'1px solid black', borderRadius:'100px'}} />

      <Card.Body>
        <Card.Title as='h1'><strong>{student.firstName + ` ` + student.lastName}</strong></Card.Title>
        <Card.Text as='p'>{student.email}</Card.Text>
        <Card.Text as='p'>{student.company}</Card.Text>
        <Card.Text as='p'>{student.skill}</Card.Text>
        <Card.Text as='p'>{student.grades}</Card.Text>
      </Card.Body>
    </Card>

  )
}

export default StudentCard