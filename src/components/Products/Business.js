import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/business/product1.jpg';
import product2 from '../../images/products/business/product2.jpg';
import product3 from '../../images/products/business/product3.jpg';
import product4 from '../../images/products/business/product4.jpg';
import product5 from '../../images/products/business/product5.jpg';

const Business = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Think & Grow Rich", 'author':'Napoleon Hil','hp':'Paperback','price':'99' },
        { 'id': '2', 'src':product2 , 'title': "The Richest Man in Babylon", 'author':'George S. Clason','hp':'Paperback','price':'99' },
        { 'id': '3', 'src':product3 , 'title': "Zero to One: Notes on Start Ups, or How to Build the Future", 'author':'Peter Thie','hp':'Paperback','price':' 336' },
        { 'id': '4', 'src':product4 , 'title': "The Intelligent Investor (English) ", 'author':'Benjamin Graham','hp':'Paperback','price':' 473' },
        { 'id': '5', 'src':product5 , 'title': "The Psychology of Money", 'author':'Morgan Housel','hp':'Paperback','price':' 277' }
    

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

export default Business
