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
import {Card, CardHeader, Col, Container, Row, Table} from "reactstrap";

// core components
import GeofenceHeader from "../../../components/Headers/GeofenceHeader.js";


class ManageGeofence extends React.Component {
  render() {
    return (
      <div>
        <GeofenceHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">All Geofencing</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
                    <th scope="col">Geofence ID</th>
                    <th scope="col">Location Name</th>
                    <th scope="col">Center</th>
                    <th scope="col">Radius</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>

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

export default ManageGeofence;
