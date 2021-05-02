import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MDBCol, MDBIcon } from "mdbreact";
import "./Friends.css";

const Friends: React.FC = () => {
  return (
    <IonPage>
      <div id="second">
        <RiArrowGoBackLine id="back" />
        <h2>FRIEND LIST</h2>
        <img
          id="discord"
          src="https://img.icons8.com/fluent/96/000000/discord-new-logo.png"
        />
        <img
          id="facebook"
          src="https://img.icons8.com/officel/48/000000/facebook-circled.png"
        />
      </div>
      <Container id="seconddiv">
        <Row>
          <Col>
            <SearchIcon id="search" />
          </Col>
          <Col xs={8}>
            <MDBCol md="6">
              <input
                className="form-control"
                id="input"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBCol>
          </Col>
        </Row>
      </Container>
    </IonPage>
  );
};

export default Friends;