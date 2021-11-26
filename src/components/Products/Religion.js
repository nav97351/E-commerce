import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/religion/product1.jpg';
import product2 from '../../images/products/religion/product2.jpg';
import product3 from '../../images/products/religion/product3.jpg';


const Religion = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "A History of the Sikhs (1469-1839) - Vol. 1: Volume 1 : 1469-1839", 'author':'Khushwant Singh','hp':'Paperback','price':'400' },
        { 'id': '2', 'src':product2 , 'title': "Religion in Indian History", 'author':'Irfan Habib','hp':'Paperback','price':'373'},
        { 'id': '3', 'src':product3 , 'title': "Spirituality for Leadership & Success: Greatest Lessons (Complete Series, Set Of 5 Books)", 'author':' Pranay','hp':'Product bundle','price':'715'}
      

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

export default Religion
