import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/entertainment/product1.jpg';
import product2 from '../../images/products/entertainment/product2.jpg';
import product3 from '../../images/products/entertainment/product3.jpg';

const Entertainment = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Entertainment Book 2005: Spokane", 'author':'Entertainment Publications','hp':'Hardcover','price':'300' },
        { 'id': '2', 'src':product2 , 'title': "Greatest Comedies of Shakespeare (Deluxe Hardbound Edition)  ", 'author':'William Shakespeare','hp':'Hardcover','price':'399'},
        { 'id': '3', 'src':product3 , 'title': "Animal Farm ", 'author':'George Orwell','hp':'Paperback','price':'69' }
       

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

export default Entertainment
