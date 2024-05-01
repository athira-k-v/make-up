import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Price() {
  return (
    <div>
<CardGroup className='container'>
      <Card 
      >
        <Card.Img style={{height:"300px", width:"300px"}} className='p-' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-285-223,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713125841_99.jpg" />
       
      </Card>
      <Card>
        <Card.Img style={{height:"300px", width:"300px"}} className='p-' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-285-223,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713125842_199.jpg" />
        
      </Card>
      <Card>
        <Card.Img style={{height:"300px", width:"300px"}} className='p-' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-285-223,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713125842_299.jpg" />
      
      </Card>
      <Card>
        <Card.Img style={{height:"300px", width:"300px"}} className='p-' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-285-223,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713125843_499.jpg" />
      
      </Card>
    </CardGroup>

    </div>
  )
}

export default Price