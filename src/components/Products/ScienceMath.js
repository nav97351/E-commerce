import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../css/ProductsDetails.css'
import ProductCard from '../ProductCard'
import product1 from '../../images/products/scienceMath/product1.jpg';
import product2 from '../../images/products/scienceMath/product2.jpg';
import product3 from '../../images/products/scienceMath/product3.jpg';


const ScienceMath = () => {
    const data__cards = [
        { 'id': '1', 'src':product1 , 'title': "Oswaal NCERT Problems - Solutions (Textbook + Exemplar) Class 7 Science Book (For 2022 Exam)", 'author' : 'Oswaal Books & Learning Pvt Ltd','hp':'Paperback','price':'180' },
        { 'id': '2', 'src':product2 , 'title': "NCERT BOOK FOR MATH AND SCIENCE IN CLASS 9th (COMBO PACK) ", 'author':'  NCERT','hp':'Paperback','price':'266'},
        { 'id': '3', 'src':product3 , 'title': "Arithmetic (Quant) Book for SSC CGL, CHSL, CPO and Other Govt. Exams (English Printed Edition) ", 'author':"Adda247 Publications",'hp':'Paperback','price':'245'}
      

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

export default ScienceMath
