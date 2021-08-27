import React from 'react';

import * as style from 'react-bootstrap'

const Navbar = () => {

    

    return (
        <>
          <style.Navbar fixed="top" className="mr-md-5" collapseOnSelect expand="md" style={{
                // backgroundImage: "linear-gradient(to bottom, rgba(72, 173, 168), rgba(72, 173, 168, 0.5))",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                
                fontWeight: 'bolder'
            }}>
  <style.Navbar.Brand href="/">
    <img
  src="https://i.imgur.com/dwXn5P4.gif"
  width="100"
  height="100"
  className="d-inline-block align-top"
  alt="React Bootstrap logo"
/></style.Navbar.Brand>
  <style.Navbar.Toggle aria-controls="responsive-style.Navbar-style.Nav" />
  <style.Navbar.Collapse id="responsive-Navbar-Nav">
    <style.Nav className="mr-auto">
      
    </style.Nav>
    <style.Nav style={{ 
    backgroundImage: "linear-gradient(to top, rgba(1, 106, 141, 1), rgba(1, 106, 141, 0))",
    borderRadius: '10%'
    }} >
       <style.Nav.Link href="/about" className='btn btn-outline-primary m-2' style={{
        fontWeight: 'bolder'
    }}>About</style.Nav.Link>
    <style.Nav.Link href="/blog" className='btn btn-outline-primary m-2' style={{
        fontWeight: 'bolder'
    }}>Blog</style.Nav.Link>
    <style.Nav.Link className='btn btn-outline-primary m-2' style={{
        fontWeight: 'bolder'
    }} href="portfolio">
        Portfolio
      </style.Nav.Link>
      <style.Nav.Link href="/contact" className='btn btn-outline-primary m-2' style={{
        fontWeight: 'bolder'
    }}>Contact</style.Nav.Link>
      
    </style.Nav>
  </style.Navbar.Collapse>
</style.Navbar>
        </>
    )
}

export default Navbar;

{/* <span style={{ fontSize: 'xx-large', fontWeight: 'normal'}}>C</span><span className='align-text-bottom'>olter</span> 
  <span style={{ fontSize: 'xx-large', fontWeight: 'normal'}}>C</span><span className='align-text-bottom'>rockett</span> */}
  // style={{ 
  //   backgroundColor: 'rgba(255, 255, 255, 0.7)',
  //   borderRadius: '10%'
  //   }}