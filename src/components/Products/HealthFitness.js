import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/healthFitness/product1.jpg';
import product2 from '../../images/products/healthFitness/product2.jpg';
import product3 from '../../images/products/healthFitness/product3.jpg';
import product4 from '../../images/products/healthFitness/product4.jpg';

const HealthFitness = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Fasting Book: For Health, Fitness, Weight Loss & Detoxing - 11 Juicing For Beginners Recipes With Delicious & Healthy Fruit & Vegetable Juices ", 'author':'Juliana Baltimoore','hp':'Paperback','price':'428' },
        { 'id': '2', 'src':product2 , 'title': "Don't Lose Your Mind, Lose Your Weight", 'author':'Rujuta Diwekar','hp':'Paperback','price':'183'},
        { 'id': '3', 'src':product3 , 'title': "The 12-Week Fitness Project (Updated for 2021 with 12 Extra Guidelines)", 'author':'Rujuta Diwekar ','hp':'Paperback','price':'170' },
        { 'id': '4', 'src':product4, 'title': "THow Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease", 'author':'Michael Greger','hp':'Paperback','price':'337' }
       

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

export default HealthFitness
