import React from 'react'
import Slider from './Slider'
import img1 from '../images/slider/img1.jpg';
import img2 from '../images/slider/img2.jpg';
import img3 from '../images/slider/img3.jpg';
import art from '../images/card_images/art.jpg';
import biographies from '../images/card_images/biographies.jpg';
import business from '../images/card_images/business.jpg';
import comics from '../images/card_images/comics.jpg';
import computers from '../images/card_images/computers.jpg';
import cooking from '../images/card_images/cooking.jpg';
import entertainment from '../images/card_images/entertainment.jpg';
import health from '../images/card_images/health.jpg';
import history from '../images/card_images/history.jpg';
import hobbies from '../images/card_images/hobbies.jpg';
import horror from '../images/card_images/horror.jpg';
import kids from '../images/card_images/kids.jpg';
import literature from '../images/card_images/literature.jpg';
import medical from '../images/card_images/medical.jpg';
import mysteries from '../images/card_images/mysteries.jpg';
import parenting from '../images/card_images/parenting.jpg';
import religion from '../images/card_images/religion.jpg';
import romantic from '../images/card_images/romantic.jpg';
import sci from '../images/card_images/science.jpeg';
import sci_fi from '../images/card_images/sci-fi.jpg';
import self_help from '../images/card_images/self-help.jpeg';
import social_science from '../images/card_images/social-science.jpg';
import sports from '../images/card_images/sports.jpg';
import teens from '../images/card_images/teens.jpg';
import travel from '../images/card_images/travel.jpg';
import true_crime from '../images/card_images/true-crime.jpg';

import { Col, Row, Container } from '../../node_modules/react-bootstrap'
import '../css/Section.css'


import CardDetails from './CardDetails';

export default function Section() {
  const data__slider = [
    { 'id': '1', 'src': img1 },
    { 'id': '2', 'src': img2 },
    { 'id': '3', 'src': img3 }

  ]
  const data__cards1 = [
    { 'id': '1', 'src': art, 'title': "Art & Music" },
    { 'id': '2', 'src': biographies, 'title': "Biographies & AutoBiographies" },
    { 'id': '3', 'src': business, 'title': "Business" },
    { 'id': '4', 'src': comics, 'title': "Comics" },
    { 'id': '5', 'src': computers, 'title': "Computers & Tech" },
    { 'id': '6', 'src': cooking, 'title': "Cooking" },
    
    { 'id': '8', 'src': entertainment, 'title': "Entertainment" },
    { 'id': '9', 'src': health, 'title': "Health & Fitness" },
    { 'id': '10', 'src': history, 'title': "History" },
    { 'id': '11', 'src': hobbies, 'title': "Hobbies & Crafts" },
    { 'id': '13', 'src': horror, 'title': "Horror" },
    { 'id': '14', 'src': kids, 'title': "Kids" },
    { 'id': '15', 'src': literature, 'title': "Literature & Fiction" },
    { 'id': '16', 'src': medical, 'title': "Medical" },
    { 'id': '17', 'src': mysteries, 'title': "Mysteries" },
    { 'id': '18', 'src': parenting, 'title': "Parenting" },
    { 'id': '19', 'src': religion, 'title': "Religion" },
    { 'id': '20', 'src': romantic, 'title': "Romance" },
    { 'id': '21', 'src': sci_fi, 'title': "Sci-Fi & Fantasy" },
    { 'id': '22', 'src': sci, 'title': "Science & Math" },
    { 'id': '23', 'src': self_help, 'title': "Self-help" },
    { 'id': '24', 'src': social_science, 'title': "Social Sciences" },
    { 'id': '25', 'src': sports, 'title': "Sports" },
    { 'id': '26', 'src': teens, 'title': "Teen" },
    { 'id': '27', 'src': travel, 'title': " Travel" },
    { 'id': '28', 'src': true_crime, 'title': "True Crime" }
  ]
  

  return (
    <>
      <Container fluid className="section__slider">
        <Slider data={data__slider} />
      </Container>
      <Container fluid className="section__cards ">
        <br/>
        <Row className="section__cardgroup">
          {/* calling col and card everytime */}
          {data__cards1.map((i)=>{
            return(
              <Col xs={12} sm={12} md={6} lg={4} xl={3} className="section__cards__col " ><CardDetails key={i.id} image = {i.src} title={i.title} /><br/><br/></Col>
            )
          })}
          </Row>
       
      </Container>
      

    </>
  )
}
