import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/hobbiesCrafts/product1.jpg';
import product2 from '../../images/products/hobbiesCrafts/product2.jpg';
import product3 from '../../images/products/hobbiesCrafts/product3.jpg';


const HobbiesCrafts = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Best Ever Craft Project Book: 300 Stunning and Easy-to-Make Craft Projects for the Home Shown in Step-by-Step with Over 2000 Fabulous Photograph", 'author':'Lucy Painte','hp':'Paperback','price':'2791' },
        { 'id': '2', 'src':product2 , 'title': "Gikso Art and Craft A – Activity Book for Kids Age 3-6 Years Old (English) - Reprinted 2020", 'author':'GIKSO','hp':'Paperback','price':'220'},
        { 'id': '3', 'src':product3 , 'title': "Essential Guide to Drawing: Animals: A Practical and Inspirational Workbook", 'author':'Duncan Smith','hp':'Paperback','price':'149' }
       

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

export default HobbiesCrafts
