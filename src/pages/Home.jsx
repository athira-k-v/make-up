import React from 'react'
import Header from '../components/Header'
import Carousals from '../components/Carousals'
import CardGroups from '../components/CardGroups'
import Featured from '../components/Featured'
import Price from '../components/Price'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Catagory from '../components/Catagory'
import Nav from 'react-bootstrap/Nav';
import Cards1 from '../components/Cards1'
import Carousal2 from '../components/Carousal2'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';





function Home() {
    return (
        <div className='bg'>
        
            {/* <div style={{ backgroundColor: 'black', height: '50px' }} >
                <h4 style={{ color: 'white' }}> <span style={{ letterSpacing: '5px'}}><i class="fa-solid fa-mobile-screen-button"></i>  </span>   Get App   <span style={{letterSpacing:'5px'}}><i class="fa-regular fa-location-dot"></i> </span>Store & Event<i class="fa-regular fa-gift"></i> Gift Card <i class="fa-regular fa-circle-question"></i> Help</h4>

            </div> */}
           <div >
           
                  <Nav style={{backgroundColor:'purple'}}
                  
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        ><div className='text-white p-2' > <span style={{color:'purple'}} >hhhhhhhhhhjjj</span>*** BEAUTY BONANZA***  Get your Amazing Deals! <span style={{color:'purple'}}>nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj </span>   </div>
          <Nav.Item className='text-white'>
            <Nav.Link href="/home" className='text-white'><i class="fa-solid fa-mobile-screen-button" ></i>Get App</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-white'><i class="fa-solid fa-location-dot"></i>Store & Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-white'><i class="fa-solid fa-gift"></i>Gift Card</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link className='text-white' ><i class="fa-regular fa-circle-question"></i>Help</Nav.Link>
          </Nav.Item>
        </Nav>
           </div>

            <Header></Header>
            <div className='hr'> </div>
           <Carousals></Carousals>

           <div className='grad text-center p-2'>
FREE SHIPPING on purchase above Rs. 499
           </div>

           <div>
            <span className='sale'>..Sale Is Live...</span>
           </div>
           <CardGroups></CardGroups>
           <div className='container'>
            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1714020349_coming-soon-web.jpg" alt="" />
           </div>


<div>
<CardGroup >
       <Card>
        <Card.Img style={{height:"400px", width:"400px"}} className='p-5' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625080_web_01.jpg" />
    
      </Card>

      <Card>
        <Card.Img  style={{height:"400px", width:"400px"}}  className='p-5' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625081_web_02.jpeg" />
       
      </Card>
     
      <Card>
        <Card.Img style={{height:"400px", width:"400px"}}  className='p-5' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625081_web_03.jpeg" />
        
      </Card>
      <Card>
        <Card.Img style={{height:"400px", width:"400px"}}  className='p-5' variant="top" src="https://media6.ppl-media.com/tr:w-320,ar-16-13,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1711625082_web_04.jpg" />
    
      </Card>
     
      

    </CardGroup>
</div>












           <Carousal2></Carousal2>
           <div>
            <h2 className='feat p-3 '>Featured</h2>
           </div>
           <br /><br />
           <Featured></Featured>
           <br /><br />
           <div className='container'>
            <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713969853_coming-soon-thickstrip-web.jpg" alt="" />
           </div>
           <br /><br />
           <Price></Price><br /><br />
           <Cards1></Cards1>
           <div className='container'>
            <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/resize-w:1280/theme-image-1712687963880.jpeg?dpr=1" alt="" />
           </div>

           <div>
            <img src="https://images-static.nykaa.com/uploads/c0e2f225-0aca-4d2f-9255-3b2231262bcb.png?tr=cm-pad_resize,w-1800" alt="" />
           </div>
          
           <div>
            <h2  className='cata p-3 '>Shop By Catagory</h2>
           </div>
        

           <Catagory></Catagory>



<div>
    <video src=""></video>
</div>



           <Cards></Cards>
           <br /><br />
           <div className='container aware' style={{height:"100px", fontSize:'28px'}} >
           Please beware of fraudulent calls and messages. Purplle.com doesn't call / message customers regarding gifts, offers, and discounts, prizes, freebies, sale of products or ask for payments through a link .
           </div>
<br /><br />
           <div className='container'>
    <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1662556480_benefit-icons-strip-web.jpg" alt="" />
</div>
           <Footer></Footer>
        </div>
    )
}

export default Home