import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/literatureFiction/product1.jpg';
import product2 from '../../images/products/literatureFiction/product2.jpg';
import product3 from '../../images/products/literatureFiction/product3.jpg';

const LiteratureFiction = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "All the Light we Cannot See: The Breathtaking World Wide Bestseller", 'author':' Anthony Doerr ','hp':'Paperback','price':'320' },
        { 'id': '2', 'src':product2 , 'title': "The Literature Book: Big Ideas Simply Explained", 'author':' DK','hp':'Hardcover','price':'908'},
        { 'id': '3', 'src':product3 , 'title': "World’s Greatest Classics (Box Set of 4 Books)", 'author':'Jane Austen F. Scott Fitzgerald, Oscar Wilde, Emily Brontë','hp':'Paperback','price':'499'}

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

export default LiteratureFiction
