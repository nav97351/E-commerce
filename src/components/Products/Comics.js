import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/comics/product1.jpg';
import product2 from '../../images/products/comics/product2.jpg';
import product3 from '../../images/products/comics/product3.jpg';


const Comics = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Set of 20 Comics by DC Comics and Marvel Comics | Assorted Collection |", 'author':'DC Comics, Marvel Comics','hp':'Paperback','price':'1995' },
        { 'id': '2', 'src':product2 , 'title': "The Black Island (Tintin)", 'author':'Herge','hp':'Paperback','price':'326' },
        { 'id': '3', 'src':product3 , 'title': "Menstrupedia Comic : The Friendly Guide To Periods For Girls (English)", 'author':'Aditi Gupt','hp':'Paperback','price':' 209' }

    ]
    return (
        <>
            <Container fluid className="container__section ">
        <br/>
        <Row >
          {/* calling col and card everytime */}
          {data__cards.map((i)=>{
            return(
              <Col xs={12} sm={12} md={6} lg={4} xl={3} className="section__cards__col " ><ProductCard key={i.id} image={i.src} title={i.title} author={i.author} hp={i.hp} price={i.price} /><br/><br/></Col>
            )
          })}
          </Row>
       
      </Container>
        </>
    )
}

export default Comics
