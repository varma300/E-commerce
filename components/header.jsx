
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { Link, useNavigate} from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { BiCartDownload  } from 'react-icons/bi';
import { AiOutlineLogout } from "react-icons/ai";
import { context } from './Context';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';




function NavScrollExample() {
  const navigate = useNavigate();

  const data=useContext(context);
  const {auth,setauth,carts,badge}=data;
  const LogoutHandler=()=>{
    setauth(false);
    navigate('/');

  }
  return (

    <>
    <div className='hed'>Free Express Shipping on all orders with all duties included</div>
    <Navbar bg="light" expand="lg" sticky="top" >
    <Navbar sticky="top" />
      <Container fluid>
        <Navbar.Brand href="/" className=' ps-5 pe-5' style={{fontSize:'1.5rem', fontFamily:'Poppins,sans-serif', fontWeight:600,}}>P L A S H O E</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link as={Link} to="/men" style={{fontWeight:'bold'}}>MEN</Nav.Link>
            <Nav.Link as={Link} to="/women" style={{fontWeight:'bold'}}>WOMEN</Nav.Link>
            <Nav.Link as={Link} to="/all" style={{fontWeight:'bold'}}>COLLECTION</Nav.Link>
            <Nav.Link as={Link} to="/login/boss" style={{fontWeight:'bold'}}>ADMIN</Nav.Link>
           
            
           
          
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          {auth?  <Nav.Link as={Link} to="/cart"> <BiCartDownload  size={30} /><Badge className='me-4' style={{color:'black'}}>{carts.length}</Badge></Nav.Link>:null}

          {badge.map((e)=>(auth?<Badge  style={{backgroundColor:'white' , color:'black'}}>{e.name}</Badge>:null))}
          {auth?    <div onClick={LogoutHandler}><AiOutlineLogout size={30} className=' ms-4'/></div>:<Nav.Link as={Link} to='/login'> <FaUserAlt size={25} className='ms-4'/></Nav.Link>}
    
    
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
    </>
  );
}

export default NavScrollExample;