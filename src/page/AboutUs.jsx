/*const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
      <b>MY ABOUT US COMPONENT</b>
    </div>
  );
};

export default AboutUs;*/
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import priyal from "../images/priyal.jpeg";
import nikhil from "../images/nikhil.jpeg";
import vrushali from "../images/vrushali.jpeg";
import abhijeet from "../images/abhijeet.jpeg";
import yogesh from "../images/yogesh.jpeg";
const AboutUs = () =>{
    return(
        <Container>
                 <br/>
                <h1>About Us</h1>
         
            <p> AeroEase India`s most preffered airlines | With offices in India and abroad, we have more than 100 branches worldwide that takes the companies reach to almost all major travel destinations of the world | Elevate your flying experience with extra space , a sumptuous meal with beverage and priority service. | Low airfares on convenient flights on India and International | From runways to memories </p> <br/>
                 
                  <h2>Our Members Include-</h2>
                  <br/>
            <Row>
                 <Col lg={2}>
                  <Card style={{ width: '12rem' }}>
                   <Card.Img variant="top"  src={priyal} />
                   <Card.Body>
                    <Card.Title>Priyal Wadhwani</Card.Title>
               <Card.Text>
               Phone- 9407568646 <br/>
               Email- Wadhwanipriyal29@gmail.com
                  </Card.Text>
               </Card.Body>
              </Card>
           </Col>   
                
           <Col lg={2}>
                  <Card style={{ width: '12rem' }}>
                   <Card.Img variant="top" src={nikhil} />
                   <Card.Body>
                    <Card.Title>Nikhil Khot</Card.Title>
               <Card.Text>
                    Phone- 9890608433 <br/>
                    Email- nikhilkhot369@gmail.com
                  </Card.Text>
               </Card.Body>
              </Card>
           </Col>   

           <Col lg={2}>
                  <Card style={{ width: '12rem' }}>
                   <Card.Img variant="top" src={vrushali} />
                   <Card.Body>
                    <Card.Title>Vrushali Patil</Card.Title>
               <Card.Text>
                         Phone- 749811000 <br/>
                         Email- vrushalipatil@gmail.com
                  </Card.Text>
               </Card.Body>
              </Card>
           </Col>   
            
                         <Col lg={2}>
                         <Card style={{ width: '12rem' }}>
                          <Card.Img variant="top" src={yogesh} />
                          <Card.Body>
                           <Card.Title>Yogesh Shelke</Card.Title>
                      <Card.Text>
                                Phone- 7498110134 <br/>
                                Email- yogeshshelke@gmail.com
                         </Card.Text>
                      </Card.Body>
                     </Card>
                  </Col>    
                                
                                <Col lg={2}>
                                <Card style={{ width: '12rem' }}>
                                 <Card.Img variant="top" src={abhijeet} />
                                 <Card.Body>
                                  <Card.Title>Abhijeet More</Card.Title>
                             <Card.Text>
                                       Phone- 749811000 <br/>
                                       Email- abhijeetmore@gmail.com
                                </Card.Text>
                             </Card.Body>
                            </Card>
                         </Col>   
                                       
            </Row>
        </Container>



     );
 }
 export default AboutUs;
