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

  constructor(props) {
    super(props);
    this.state = {
      unpairDeviceModalShow: false,
    }
  }

  // Triggers the opening/closing of the unpairDeviceModal
  setUnpairDeviceModalShow = (bool) => {
    this.setState({
      unpairDeviceModalShow: bool,
    });
  };


  render() {
    const {devices} = this.props;
    const { unpairDeviceModalShow } = this.state;
    // map our list of devices to the device table
    const deviceList = devices.map((device) => {
      return(
          <DeviceTableItem
              key={device.id}
              id={device.id}
              devicePaired={device.devicePaired}
              deviceStatus={device.deviceStatus}
              associatedUserName={device.associatedUserName}
              associatedUserID={device.associatedUserID}
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
                  <h3 className="mb-0">All Registered Devices</h3>
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
