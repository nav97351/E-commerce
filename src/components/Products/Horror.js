import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/horror/product1.jpg';
import product2 from '../../images/products/horror/product2.jpg';


const Horror = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Asylum: 1", 'author':'Madeleine Roux ','hp':'Paperback','price':'345' },
        { 'id': '2', 'src':product2 , 'title': "And the Roses Bled", 'author':'Mehak Daleh','hp':'Paperback','price':'199'}

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

export default Horror
