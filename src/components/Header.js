import React from 'react'
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderOptions from './HeaderOptions';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <>
        {/* expand will allow to collapse the navbar at breakpoints like sm, md,lg etc */}
        
            <Navbar bg="dark" expand="md" >
                <Container fluid>
                    <Nav>
                        <Navbar.Brand href="#home" >
                            <img src={logo} alt="React Bootstrap logo" height="25"/>
                        </Navbar.Brand>
                        <Nav>
                            <SearchIcon />
                            <input placeholder="search"></input>
                        </Nav>
                    </Nav>
                    <Nav className="flex-row navbar__icons" >
                        <Link to="/"  style={{ textDecoration: 'none' }}><HeaderOptions Icon={HomeIcon} title='Home' /></Link>
                        <Link to="/products"> <HeaderOptions Icon={ExploreIcon} title='Products' /></Link>
                        <Link to="/contact"  style={{ textDecoration: 'none' }}> <HeaderOptions Icon={InfoIcon} title='Contact us' /></Link>
                        <Link to="/cart"  style={{ textDecoration: 'none' }}> <HeaderOptions Icon={ShoppingCartIcon} title='Cart' /></Link>
                        

                    </Nav>
                </Container>
            </Navbar>

        </>


    )
}
