import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Featured() {
    return (
        <div>
            <CardGroup className='d-flex justify-content-center align-items-center' >
                <Card className='p-3'>
                    <Card.Img variant="top" src="https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/343588/l-oreal-paris-extraordinary-oil-serum-100-ml-12-70_1_display_1706696061_26f75bab.jpg" />
                    <Card.Body>
                        <Card.Title>L'Oréal Paris Elsève Hair Oil, 100 ml</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>467 <br />
                            <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>
                        </Card.Text>
                    </Card.Body>

                </Card>

                <Card className='p-3'>
                    <Card.Img variant="top" src="https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/327612/dot-and-key-ceramides-and-hyaluronic-hydrating-face-cream-with-probiotic-i-barrier-repair-for-dry-skin-100g_01_display_1708673307_b8a52e96.jpg" />
                    <Card.Body>
                        <Card.Title>CDot & Key Ceramides Moisturizer 100g</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>336 <br />  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className='p-3'>
                    <Card.Img variant="top" src="https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/363210/nivea-soft-cr-me-300-ml-91_10_display_1659532333_9952ab9d.jpg" />
                    <Card.Body>
                        <Card.Title>NIVEA Soft Light Moisturising Cream (500ml)</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>550 <br />    <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='p-3'>
                    <Card.Img variant="top" src="https://media6.ppl-media.com/tr:h-250,w-250,c-at_max,l-image,i-AD_35x235_small_kJWM53nMn1.png,w-60,lfo-top_right,l-end,dpr-2/static/img/product/263514/ny-bae-eye-love-volumizing-mascara-8ml_1_display_1709632144_36f1644a.jpg" />
                    <Card.Body>
                        <Card.Title>NY Bae Eye Love Curling Mascara  (8 ml)</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>254 <br />  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className='p-3'>
                    <Card.Img variant="top" src="https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/371005/alps-goodness-rosemary-water-100ml-rosemary-water-for-hair-hair-spray-for-hair-growth-1_1_display_1711428333_3e0bc880.jpg" />
                    <Card.Body>
                        <Card.Title>Alps Goodness Rosemary water for hair</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>198 <br />  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card className='p-3'>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCgu3jPjcH9M4rs5_Akb7R8Qv6pBMGl2fv8rcemcgmg556D0l" />
                    <Card.Body>
                        <Card.Title>BBLUNT Hot Shot Heat Protection Hair</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>459 <br />  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>  <i style={{color:"chocolate"}} class="fa-solid fa-star "></i>
                        </Card.Text>
                    </Card.Body>
                </Card>


                {/* <Card className='p-3'>
                    <Card.Img variant="top" src="https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/338511/l-oreal-paris-hyaluron-moisture-72h-moisture-filling-shampoo-with-hyaluronic-acid-for-dry-and-dehydrated-hair-adds-shine-and-bounce-180ml-18_6_display_1698823701_428f328a.jpg" />
                    <Card.Body>
                        <Card.Title>L'Oreal Paris Moisture Filling Shampoo</Card.Title>
                        <Card.Text>
                            <i class="fa-solid fa-indian-rupee-sign"></i>209
                        </Card.Text>
                    </Card.Body>
                </Card> */}

            </CardGroup>

        </div>
    )
}

export default Featured