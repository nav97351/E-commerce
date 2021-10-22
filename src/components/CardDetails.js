
import React from 'react'
import { useState } from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/CardDetails.css';
import ArtMusic from './Products/ArtMusic';
import Biography from './Products/Biography';


export default function CardDetails({key,image,title}) {
  
  function info(){
    var comp;
    if({key}=='1')
      var comp = "/artmusic";
  }

  const [active, setActive] = useState("");

  return (
    <>
        <Card className="card__list">
            <Card.Img  src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title><br/>
               {/* <Button variant="primary" onClick={()=>setActive("1")}>Explore..</Button> */}
               <Link to={comp}><Button variant="primary" >Explore..</Button></Link>
            </Card.Body>

        </Card> 

        
          {active=== '1' && <ArtMusic/>}
          {active== '2' && <Biography/>}
       
    </>
  )
}
