import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Carousal2() {
  return (
    <div>
         <Carousel data-bs-theme="dark">

         <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1713988565_hul_haircare-2596x836.jpeg"
          alt="Second slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img  style={{height:'500px'}} 
          className="d-block w-100  p-5 container"
          src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1713988568_loreal_paris_hair_damaged_hair_ash-2596x836.jpeg"
          alt="First slide"
        />
        
      </Carousel.Item>
      
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1713950070_insight_blush_makeup-2596x836-1.jpeg"
          alt="four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1713949998_sugar_makeup_new-2596x836.jpeg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1713950104_ponds_skin_serum-2596x836-1.jpeg"
          alt="four slide"
        />
        
      </Carousel.Item>


      
    </Carousel>
    </div>
  )
}

export default Carousal2