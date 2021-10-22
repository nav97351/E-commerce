import React from 'react'
import { Table,Container } from 'react-bootstrap'
import '../css/Cart.css';

const Cart = () => {
    return (
        <>
        <center>
        <Container fluid className="cart__container">
            <Table responsive className="cart__table">
                <thread>
                    <tr>
                        <th className="cart__table__col1">Sno.</th>
                        <th className="cart__table__col2">Items</th>
                        <th className="cart__table__col3">Quantity</th>
                        <th className="cart__table__col4">Price</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>book 1</td>
                        <td>1</td>
                        <td>500</td>
                    </tr>
                    
                </thread>
            </Table>
        </Container>
            
        </center>
       
        </>
    )
}

export default Cart
