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
import DeviceManagementHeader from "../../../components/Headers/DeviceManagementHeader.js";
import {connect} from "react-redux";
import DeviceTableItem from "../../../components/DeviceManagement/DeviceTableItem/DeviceTableItem";

class DeviceManager extends React.Component {


  render() {
    const {devices} = this.props;
    // map our list of devices to the device table
    const deviceList = devices.map((device) => {
      return(
          <DeviceTableItem
              key={uuidv4()}
              device={device}
              associatedUserName={(!device.associatedUser)? "NONE" : device.associatedUser.firstName + " " + device.associatedUser.lastName}
              associatedUserID={(!device.associatedUser)? "NONE" : device.associatedUser.id}
          />
      )
    })
    return (
      <div>
        <DeviceManagementHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">All Devices</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
                    <th scope="col">Device ID</th>
                    <th scope="col">Device Status</th>
                    <th scope="col">Associated User</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {deviceList}
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
    devices: state.devices,
  };
};

export default connect(mapStateToProps)(DeviceManager);
