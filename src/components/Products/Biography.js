import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/biography/product1.jpg';
import product2 from '../../images/products/biography/product2.jpg';
import product3 from '../../images/products/biography/product3.jpg';

const Biography = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "The Diary of a Young Girl", 'author':'Bridget Watson Payne','hp':'Paperback','price':'99' },
        { 'id': '2', 'src':product2 , 'title': "Mahatma Gandhi Autobiography: The Story Of My Experiments With Truth", 'author':'Mahatma Gandhi','hp':'Paperback','price':'99' },
        { 'id': '3', 'src':product3 , 'title': "Wings of Fire: An Autobiography of Abdul Kalam", 'author':'Arun Tiwari, A.P.J. Abdul Kalam','hp':'Paperback','price':' 252' },
    

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

export default Biography
