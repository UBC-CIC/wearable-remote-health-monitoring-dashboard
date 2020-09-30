/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import CreateRoomModal from "../RoomManagement/CreateRoomModal/CreateRoomModal";



// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class RoomManagementHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createRoomModalShow: false,
        }
    }

    // Triggers the opening/closing of the createRoomModal
    setCreateRoomModalShow = (bool) => {
        this.setState({
            createRoomModalShow: bool,
        });
    };


  render() {
      const {createRoomModalShow} = this.state;
    return (
      <div>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("../../assets/img/theme/floor-plan.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="12" md="12">
                <h1 className="display-2 text-white">Room Management Console</h1>
                  <Button
                      color="info"
                      href="#"
                      onClick={() => this.setCreateRoomModalShow(true)}
                  >
                      Add a Room
                  </Button>
              </Col>
            </Row>
          </Container>
        </div>
          <CreateRoomModal show={createRoomModalShow} onHide={() => this.setCreateRoomModalShow(false)}  />
      </div>
    );
  }
}

export default RoomManagementHeader;
