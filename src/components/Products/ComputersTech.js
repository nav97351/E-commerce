import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/computersTech/product1.jpg';
import product2 from '../../images/products/computersTech/product2.jpg';
import product3 from '../../images/products/computersTech/product3.jpg';


const ComputersTech = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Computer Science and Information Technology GATE 2022", 'author':'Amrita Mishra Shanti Kirupani, Prachi Jain','hp':'Paperback','price':'558' },
        { 'id': '2', 'src':product2 , 'title': "Handbook of Computer Science & IT ", 'author':'Arihant Experts','hp':'Paperback','price':'150'},
        { 'id': '3', 'src':product3 , 'title': "Web Technologies: HTML, JAVASCRIPT, PHP, JAVA, JSP, ASP.NET, XML and Ajax, Black Book: HTML, Javascript, PHP, Java, Jsp, XML and Ajax, Black Book", 'author':'Kogent Learning Solutions Inc.','hp':'Paperback','price':' 734' }

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

export default ComputersTech
