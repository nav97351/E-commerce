import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/scifiFantasy/product1.jpg';
import product2 from '../../images/products/scifiFantasy/product2.jpg';
import product3 from '../../images/products/scifiFantasy/product3.jpg';


const ScifiFantasy = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Dark Matter: The Most Mind-Blowing And Twisted Thriller Of The Year", 'author':'Blake Crouch','hp':'Paperback','price':'341' },
        { 'id': '2', 'src':product2 , 'title': "Writing Sci-Fi and Fantasy (Lit Starts): A Book of Writing Prompts ", 'author':' San Francisco Writers Grotto','hp':'Paperback','price':'681'},
        { 'id': '3', 'src':product3 , 'title': "A Wrinkle in Time (A Puffin Book)", 'author':"Madeleine L'Engle",'hp':'Paperback','price':'232'}
      

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

export default ScifiFantasy
