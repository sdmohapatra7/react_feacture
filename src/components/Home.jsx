import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getUser, logout } from '../feacture/authSlice';

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const loginUser = useSelector(state=>state.user.user) 
  const loginUser = JSON.parse(localStorage.getItem('user'));
  console.log(loginUser)
  const logoutUser = ()=>{
    dispatch(logout())
    navigate('/')
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand >SDM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/'>Features</Nav.Link>
            <Nav.Link as={Link} to='/'>Pricing</Nav.Link>
          </Nav>
          <Nav className="justify-content-end"> 
            
            {loginUser ? 
            <><Nav.Link as={Link} to='/profile'>{loginUser.name}</Nav.Link>
            <Nav.Link as={Link} to='/' onClick={logoutUser}>Logout</Nav.Link></>
            :
            <><Nav.Link as={Link} to='/login'>Login</Nav.Link>        
            <Nav.Link as={Link} to='/signup'>Signup</Nav.Link></>
            }            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
