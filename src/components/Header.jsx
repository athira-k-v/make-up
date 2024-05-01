import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';






function Header() {
  return (
    <div >
         {/* <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Navbar expand="lg"  className='he'
      // style={{backgroundColor:"pink"}}
       >
      <Container>
        <Navbar.Brand href="#home" className='shopname'>
          {/* <img style={{height:'50px'}} src={belle} alt="" /> */}
          <div className='lilac ' >Lilac</div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >Catagories</Nav.Link>
            <Nav.Link href="#link" >Brand</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Beauty </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              <Nav.Link href="#link"></Nav.Link>
              <Nav.Link href="#home" >Offers</Nav.Link>

              <Nav.Link href="#home" >New</Nav.Link>

              <Nav.Link href="#home" >For You</Nav.Link>

              <Nav.Link href="#home" >Luxe</Nav.Link>

              <Nav.Link href="#home" >Beauty Advice</Nav.Link>

          </Nav>
        </Navbar.Collapse>

        {/* <Form  inline> */}
        
        <Form.Control 
          type="text"
          placeholder="Search"
          className=" mr-sm-2 w-25 "
        />
  {/* </Form> */}
  <i  className="fa-solid fa-bag-shopping fa-2x p-2 text-white"  > </i>
      </Container>

   
<button style={{backgroundColor:'purple',borderRadius:'10px ', border:'purple',color:"white",marginRight:'95px'}} className='p-2 '>Sign UP</button>
    </Navbar>
    </div>
  )
}

export default Header