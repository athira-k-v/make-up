import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Catagory() {
  return (
    <div>

<CardGroup className='container'>
       <Card>
        <Card.Img style={{height:"350px", width:"350px"}} className='p-5' variant="top" src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/face-banner-1.jpg?v=1582638105" />
        <div className='f1'>Face</div>
      </Card>

      <Card>
        <Card.Img style={{height:"350px", width:"350px"}} className='p-5' variant="top" src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/lips-banner-1.jpg?v=1582638105" />
        <div className='f1'>Lips</div>
      </Card>
     
      <Card>
        <Card.Img style={{height:"350px", width:"350px"}} className='p-5' variant="top" src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/eyes-banner-1.jpg?v=1582638105" />
        <div className='f1'>Eye</div>
      </Card>
      <Card>
        <Card.Img style={{height:"350px", width:"350px"}} className='p-5' variant="top" src="https://cdn.shopify.com/s/files/1/0107/2952/1233/files/nails-banner-1.jpg?v=1582638104" />
        <div className='f1'>Nails</div>
      </Card>
     
      

    </CardGroup>
        
    </div>
  )
}

export default Catagory