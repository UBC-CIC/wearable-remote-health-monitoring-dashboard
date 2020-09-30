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
import { v4 as uuidv4 } from 'uuid';

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col, Table
} from "reactstrap";
// core components
import {connect} from "react-redux";
import RoomTableItem from "../../../components/RoomManagement/RoomTableItem/RoomTableItem";
import RoomManagementHeader from "../../../components/Headers/RoomManagementHeader";

class RoomManager extends React.Component {

  render() {
    const { rooms } = this.props;
    // map our list of devices to the device table
    const roomList = rooms.map((room) => {
      return(
          <RoomTableItem
              key={uuidv4()}
              room={room}
          />
      )
    })
    return (
      <div>
        <RoomManagementHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">All Rooms</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
                    <th scope="col">Room Number</th>
                    <th scope="col">Room Name</th>
                    <th scope="col">Room Users</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {roomList}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    users: state.users,
  };
};

export default connect(mapStateToProps)(RoomManager);
