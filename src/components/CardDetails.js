
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/CardDetails.css';
export default function CardDetails({ image, title }) {

  var comp;

  if (title === "Art & Music")
    comp = "/artmusic";
  else if (title === "Biographies & AutoBiographies")
    comp = "/biography";
  else if (title === "Business")
    comp = "/business";
  else if (title === "Comics")
    comp = "/comics";
  else if (title === "Computers & Tech")
    comp = "/computerstech";
  else if (title === "Cooking")
    comp = "/cooking";
  else if (title === "Entertainment")
    comp = "/entertainment";
  else if (title === "Health & Fitness")
    comp = "/healthfitness";
  else if (title === "History")
    comp = "/history";
  else if (title === "Hobbies & Crafts")
    comp = "/hobbiescrafts";
  else if (title === "Home & Garden")
    comp = "/homegarden";
  else if (title === "Horror")
    comp = "/horror";
  else if (title === "Kids")
    comp = "/kids";
  else if (title === "Literature & Fiction")
    comp = "/literaturefiction";
  else if (title === "Medical")
    comp = "/medical";
  else if (title === "Mysteries")
    comp = "/mysteries";
  else if (title === "Parenting")
    comp = "/parenting";
  else if (title === "Religion")
    comp = "/religion";
  else if (title === "Romance")
    comp = "/romance";
  else if (title === "Science & Math")
    comp = "/sciencemath";
  else if (title === "Sci-Fi & Fantasy")
    comp = "/scififantasy";
  else if (title === "Self-help")
    comp = "/selfhelp";
  else if (title === "Social Sciences")
    comp = "/socialsciences";
  else if (title === "Sports")
    comp = "/sports";
  else if (title === "Teen")
    comp = "/teen";
  else if (title === "Travel")
    comp = "/travel";
  else if (title === "True Crime")
    comp = "/truecrime";

  return (
    <>
      <center>
        <Card className="card__list">
          <Card.Img src={image} />
          <Card.Body>
            <Card.Title className="card_title">{title}</Card.Title><br />

            <Link to={comp}><Button variant="primary" className="card_btn">Explore..</Button></Link>
          </Card.Body>

        </Card>
      </center>
    </>
  )
}
