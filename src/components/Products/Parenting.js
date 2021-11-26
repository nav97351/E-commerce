import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/parenting/product1.jpg';
import product2 from '../../images/products/parenting/product2.jpg';
import product3 from '../../images/products/parenting/product3.jpg';


const Parenting = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "How to Talk So Kids Will Listen and Listen So Kids Will Talk", 'author':'Adele Faber','hp':'Paperback','price':'315' },
        { 'id': '2', 'src':product2 , 'title': "The Goo Goo Guide to Life: An Unofficial Guide to Parenting and Other Epi'funnies'", 'author':'Kiran Bir Sethi','hp':'Paperback','price':'314'},
        { 'id': '3', 'src':product3 , 'title': "Perfect Parenting: How to Raise Happy and Successful Children", 'author':' Sushant Kalra','hp':'Paperback','price':'202'}
      

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

export default Parenting
