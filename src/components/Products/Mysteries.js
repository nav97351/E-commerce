import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/mysteries/product1.jpg';
import product2 from '../../images/products/mysteries/product2.jpg';
import product3 from '../../images/products/mysteries/product3.jpg';


const Mysteries = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Murder on the Orient Express (Film Tie-in Edition) (Poirot)", 'author':'Agatha Christie','hp':'Paperback','price':'184' },
        { 'id': '2', 'src':product2 , 'title': "The Mystery of the Blue Train (Poirot)", 'author':'Agatha Christie','hp':'Paperback','price':'234'},
        { 'id': '3', 'src':product3 , 'title': "And Then There Were None: The World’s Favourite Agatha Christie Book", 'author':'Agatha Christi','hp':'Paperback','price':'172'}
      

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

export default Mysteries
