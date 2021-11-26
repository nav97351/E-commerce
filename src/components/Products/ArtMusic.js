import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/artmusic/product1.jpg';
import product2 from '../../images/products/artmusic/product2.jpg';
import product3 from '../../images/products/artmusic/product3.jpg';
import product4 from '../../images/products/artmusic/product4.jpg';

const ArtMusic = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "How Art Can Make You Happy", 'author':'Bridget Watson Payne','hp':'Hardcover','price':'769' },
        { 'id': '2', 'src':product2 , 'title': "Quadrivium: The Four Classical Liberal Arts of Number, Geometry, Music, & Cosmologym", 'author':'Books Wooden','hp':'Hardcover','price':' 1568' },
        { 'id': '3', 'src':product3 , 'title': "Mandala Art: Colouring Books for Adults with Tear Out Sheets", 'author':'Wonder House Books','hp':'Paperback','price':' 129' },
        { 'id': '4', 'src':product4 , 'title': "Opera and the Morbidity of Music (New York Review Books Collections)", 'author':'Joseph Kerman','hp':'Hardcover','price':' 1200' },

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

export default ArtMusic
