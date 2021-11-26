import React from 'react'
import { Button, Card } from 'react-bootstrap'
import '../css/ProductCard.css'


const ProductCard = ({image,title,author,hp,price}) => {

    const addToCart = ({title,price})=>{

        

    }

    return (
        <>       
            <center>
            <Card className="card">
                    <Card.Img src={image} className="card__image"/>
                    <Card.Body>
                        <Card.Title className="card_title">{title}</Card.Title>
                        <Card.Text>
                            <h6>by {author}</h6>
                            <p>{hp}</p>
                            <h4> &#8377;{price}</h4>
                        </Card.Text>
                        
                        <Button variant="dark" className="card__btn" onClick={()=>{addToCart({title,price})}}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            
            </center>   
               
        </>
    )
}

export default ProductCard
