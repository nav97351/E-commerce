import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/medical/product1.jpg';
import product2 from '../../images/products/medical/product2.jpg';
import product3 from '../../images/products/medical/product3.jpg';
import product4 from '../../images/products/medical/product4.jpg';

const Medical = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Basics Of Medical Physiology, 4", 'author':' Venkates','hp':'Paperback','price':'460' },
        { 'id': '2', 'src':product2 , 'title': "The Human Body Book: An Illustrated Guide to its Structure, Function, and Disorders", 'author':'Steve Parke','hp':'Hardcover','price':'1035'},
        { 'id': '3', 'src':product3 , 'title': "What Doctors Don'T Get To Study In Medical School", 'author':'B.M. Hegde','hp':'Board book','price':'420'},
        { 'id': '4', 'src':product4 , 'title': "Review of Medical Physiology (A Lange medical book)", 'author':'William G. Ganong','hp':'Paperback','price':'1295'}

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

export default Medical
