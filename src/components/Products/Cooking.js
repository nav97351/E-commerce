import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/cooking/product1.jpg';
import product2 from '../../images/products/cooking/product2.jpg';
import product3 from '../../images/products/cooking/product3.jpg';
import product4 from '../../images/products/cooking/product4.jpg';


const Cooking = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "The Flavour of Spice: Journeys, Recipes, Stories", 'author':'Marryam H. Reshii','hp':'Hardcover','price':'550' },
        { 'id': '2', 'src':product2 , 'title': "Handbook of Computer Science & IT ", 'author':'Dr. Stuart Farrimond','hp':'Hardcover','price':'1217'},
        { 'id': '3', 'src':product3 , 'title': "Everyone Can Cook", 'author':'Vikas Khanna','hp':'Hardcover','price':' 428' },
        { 'id': '4', 'src':product4 , 'title': "Kunal Kapur In The Kitchen -Family Meals (Indian Cooking)", 'author':'Kunal Kapur, Gaggan Anand','hp':'Hardcover','price':'900' }

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

export default Cooking
