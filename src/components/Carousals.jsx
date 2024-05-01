import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Carousals() {
  return (
    <div>
         <Carousel data-bs-theme="dark">

        

      <Carousel.Item>
        <img  style={{height:'500px'}} 
          className="d-block w-100  p-5 container"
          src="https://www.goodvibesonly.in/cdn/shop/files/GV_Ubtan_banner_web_size_copy_1400x.jpg?v=1713188670"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://www.lakmeindia.com/cdn/shop/collections/sun_protection_page_banner.jpg?v=1695994368"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713946130_hul_skin_ponds-2596x836.jpeg"
          alt="four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1713946155_pilgrim_yami_hair-2596x836.jpeg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'500px'}}
          className="d-block w-100 p-5 container"
          src="https://bigbasket.com/media/uploads/flatpages/pd/40066356-111.jpg"
          alt="four slide"
        />
        
      </Carousel.Item>


      
    </Carousel>
    </div>
  )
}

export default Carousals