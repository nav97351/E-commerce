import React, { useState } from 'react'
import { Container,Button} from 'react-bootstrap'

import '../css/ContactUs.css'

const ContactUs = () => {

  // using useState hook to get the updated value from the input tag
  //use state takes current value and update value in []
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [subject,setSubject] = useState("");
  const [textArea, setTextArea] = useState("");

  // this handleSubmit fxn is handing the event and is added as fxn to form parameter- onSubmit
  const handleSubmit = (event)=>{
    // alert(`${name}`+"  "+`${textArea}`);
  }
  return (
    <>
    {/* <Header /> */}
    <Container fluid className="contactus">
      <center>
      <div md-px-0 className="contactus__formcontainer">
        <h2>Contact us for any Query</h2>
        <h6>Drop your message here</h6>
          <form onSubmit={handleSubmit}>
            {/* value holds the current value and on any changes new value is set which becomes the current value */}
            <input type="text" placeholder="Name" className="field" value={name} onChange={(e)=>setName(e.target.value)}></input><br/><br/>
            <input type="email" placeholder="Email-id" className="field" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>
            <input type="number" placeholder="Contact Number" className="field" value={contact} onChange={(e)=>setContact(e.target.value)}></input><br/><br/>
            <input type="text" placeholder="Subject" className="field" value={subject} onChange={(e)=>setSubject(e.target.value)}></input><br/><br/>
            <textarea type="text" placeholder="Message" className="field" id="form__textarea" value={textArea} onChange={(e)=>setTextArea(e.target.value)}></textarea><br/><br/>
            <Button type="submit" variant="secondary" className="form_submit_button">Submit</Button>
          </form>
      </div>
     </center>
      <br/><br/><br/><br/>
      <h6 ><center>We are here to help you out!</center></h6>

    </Container>

    {/* <Footer />   */}
    </>
  )
}

export default ContactUs
