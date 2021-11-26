import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/kids/product1.jpg';
import product2 from '../../images/products/kids/product2.jpg';
import product3 from '../../images/products/kids/product3.jpg';

const Kids = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Peppa Pig: Little Library Board book", 'author':' Peppa Pig ','hp':'Board book','price':'174' },
        { 'id': '2', 'src':product2 , 'title': "Amazon Brand - Solimo Board Books for Kids (Set of 10)", 'author':' Solimo','hp':'Hardcover','price':'429'},
        { 'id': '3', 'src':product3 , 'title': "My First Fun Activity Boxset of 4 Books: Spot the Difference, Mazes, Word Search & Dot to Dot ", 'author':'Wonder House Books','hp':'Paperback','price':'249'}

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

export default Kids
