import { useState } from "react";
import './signup.css';
import { Col, Container, Row } from "react-bootstrap";
function SignUp() {
    const [name,setName] = useState("");
    const handleSubmit = (e) => {
    e.prevenColefault();
    alert(name);
    };
    
    const handleChange = (e) => {
    setName(e.target.value);
    };
        return (
          <form onSubmit={(e) => handleSubmit(e)}>
            <Container className="upperTable">

              <Row bgcolor="sky blue">
                <th align="left">
                  <div id="sign-up-title">Sign up</div>

                </th>
              </Row>

              <Row>

                <Col>                  
                  <Container >
                    <Row>
                      <Col class="left-label">
                        <b> First Name: </b>
                      </Col>
                      <Col class="right-field"> <input type="text" name="firstName" onChange={(e) => handleChange(e)} /></Col>
                    </Row>

                    <Row>
                      <Col class="left-label">
                        <b> Last Name: </b>
                      </Col>
                      <Col class="right-field"> <input type="text" name="lastName"/></Col>
                    </Row>

                    <Row>
                      <Col class="left-label">
                        <b> Email Address: </b>
                      </Col>
                      <Col class="right-field"> <input type="text" name="email"/></Col>
                    </Row>

                    <Row>
                      <Col class="left-label">
                        <b> Confirm Email: </b>
                      </Col>
                      <Col class="right-field"> <input type="text" name="confirmEmail"/></Col>
                    </Row>

                    <Row>
                      <Col class="left-label">
                        <b> Password: </b>
                      </Col>
                      <Col class="right-field"> <input type="text" name="password"/></Col>
                    </Row>

                    <Row>
                      <Col class="left-label">
                        <b> Confirm Password: </b>
                      </Col>
                      <Col class="right-field"> <input type="text" name="confirmPassword"/></Col>
                    </Row>
                    <Row>
                      <Col class="left-label">
                        I am a developer <input type="radio" name="developerFlag"/> <br/> </Col>
                        </Row>
                        <Row>
                          <Col class="left-label" colspan="2">If you would like to upload your own builds and invite your own </Col>
                        </Row>
                        <Row>
                          <Col class="left-label">Testers </Col>
                        </Row>
                    <Row>
                      <Col class="left-label" colspan="2" id="sign-up-btn-Col">
                        <input type="button" id="sign-up-btn"
                          value="Sign Up -->" />
                      </Col>
                    </Row>                    
                  </Container>
                  </Col>
              </Row>

              <caption>
                <h1> Sign Up Page </h1>
              </caption>
            </Container>
          </form>
        )
}

export default SignUp;