import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function Cards() {
  return (
    <div>
       <CardGroup  className='container'>
      <Card 
      >
        <Card.Img style={{height:"400px", width:"650px"}}  variant="top" src="https://images-static.nykaa.com/uploads/fb4ea84d-d5d6-4a6a-a2bb-2c7bb1292cd4.jpg?tr=cm-pad_resize,w-900" />
       
      </Card>
      <Card>
        <Card.Img style={{height:"400px", width:"650px"}}  variant="top" src="https://images-static.nykaa.com/uploads/05366a2c-d944-4ddd-aacd-87c79bf6c9f0.jpg?tr=cm-pad_resize,w-900" />
        
      </Card>
      
    </CardGroup> 
    </div>
  )
}

export default Cards
