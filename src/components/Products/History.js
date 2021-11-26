import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/history/product1.jpg';
import product2 from '../../images/products/history/product2.jpg';
import product3 from '../../images/products/history/product3.jpg';
import product4 from '../../images/products/history/product4.jpg';
import product5 from '../../images/products/history/product5.jpg';

const History = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "A Short History of the World", 'author':'H. G. Wells','hp':'Paperback','price':'179' },
        { 'id': '2', 'src':product2 , 'title': "The Theory of Everything: The Origin and Fate of the Universe", 'author':'Stephen Hawking','hp':'Paperback','price':'169'},
        { 'id': '3', 'src':product3 , 'title': "A Brief History Of Time: From Big Bang To Black Holes", 'author':'Stephen Hawking ','hp':'Paperback','price':'262' },
        { 'id': '4', 'src':product4, 'title': "Sapiens: A Brief History of Humankind", 'author':'Yuval Noah Harari','hp':'Paperback','price':'345' },
        { 'id': '5', 'src':product5, 'title': "Encyclopedia: History Encyclopedia", 'author':'Om Books Editorial Team','hp':'Hardcover','price':'572' }
       

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

export default History
