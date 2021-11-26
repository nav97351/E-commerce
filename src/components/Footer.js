import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/Footer.css';
import logo from '../images/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
      <Container fluid className="footer">
        {/* screen is divided into 12 columns and xs, md, sm, lg are used to divide the things appear
        on screen likewise */}
        <Row>
          <Col xs={12} md={12} xl={4} className="footer__firstcol">
            <img src={logo} width="155rem" alt="ApniKitabain"/><br /><br/>
            <p className="footer__para">Apni Kitabain is designed to deliver the books for bibliophile<br /> all over India with the best and affordable price.</p>
          </Col>
          <br/>
          <Col xs={12} md={12} xl={4}  className="footer__secondcol">
            <EmailIcon style={{fontSize:"33px", color:"rgb(204, 141, 112)"}}/><br/><br/>
            <p className="footer__para">Email: apnikitabain@gmail.com</p>
          </Col>
          <Col xs={12} md={12} xl={4}  className="footer__thirdcol">
            <ConnectWithoutContactIcon style={{fontSize:"33px", color:"rgb(58, 110, 68)"}}/><br/><br/>
            <FacebookIcon style={{fontSize:"25px"}} className="footer__thirdcol__icon"/>
            <YouTubeIcon style={{fontSize:"25px"}} className="footer__thirdcol__icon" />
            <TwitterIcon  style={{fontSize:"25px"}} className="footer__thirdcol__icon" />
          </Col>
        </Row>

      </Container>
      <p className="footer__copyright">Copyright &copy; ApniKitabain.com</p>
    </>
  )
}
