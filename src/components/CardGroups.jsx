import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardGroups () {
  return (
    <CardGroup>
       <Card>
        <Card.Img style={{height:"500px", width:"500px"}} className='p-5' variant="top" src="https://i.pinimg.com/474x/fc/77/f2/fc77f2d213c6eae8099bf7b01bc1b75e.jpg" />
        
      </Card>
      <Card 
      >
        <Card.Img style={{height:"500px", width:"500px"}} className='p-5' variant="top" src="https://www.lotusherbals.com/cdn/shop/files/1200x1200_facebook_page.jpg?v=1671007584" />
       
      </Card>
     
      <Card>
        <Card.Img style={{height:"500px", width:"500px"}} className='p-5' variant="top" src="https://cdn.dribbble.com/users/2073894/screenshots/13486402/media/eac9dbf93292e11e73a6f138873c0515.jpg" />
        
        
      </Card>
    </CardGroup>
  );
}

export default CardGroups;