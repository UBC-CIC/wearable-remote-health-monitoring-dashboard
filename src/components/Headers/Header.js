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
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardHeader,
  Table,
  Media,
  UncontrolledTooltip, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card Header for HomePage -- place Alerts here */}
              <Row>
                <Col lg="12" xl="12">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">Alerts</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Last Known Location</th>
                        <th scope="col">Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr style={{"backgroundColor": "yellow"}}>
                        <th scope="row">
                          <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              John Smith
                            </span>
                          </Media>
                        </th>
                        <td>12345</td>
                        <td>
                          <Badge color="black" className="badge-dot mr-4">
                            <i className="bg-warning" />
                            LOST CONTACT
                          </Badge>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                        <span  className="mr-2">
                          LAT, LON
                        </span>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr style={{"backgroundColor": "#ff3838"}}>
                        <th scope="row">
                          <Media className="align-items-center">
                            <span className="mb-0 text-sm" style={{"color": "white"}}>
                              Jessica Johnson
                            </span>
                          </Media>
                        </th>
                        <td style={{"color": "white"}}>10851</td>
                        <td>
                          <Badge color="white" className="badge-dot mr-4">
                            <i className="bg-danger" />
                            OUT OF BOUNDS
                          </Badge>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                        <span className="mr-2" style={{"color": "white"}}>
                         LAT, LON
                        </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>

                      <tr style={{"backgroundColor": "orange"}}>
                        <th scope="row">
                          <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              Philip Westinghouse
                            </span>
                          </Media>
                        </th>
                        <td>35836</td>
                        <td>
                          <Badge color="" className="badge-dot">
                            <i className="bg-info" />
                            HEART RATE HIGH
                          </Badge>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                        <span className="mr-2">
                          LAT, LON
                        </span>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={e => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      </tbody>
                    </Table>

                  </Card>
                </Col>
                <Col lg="6" xl="3">

                </Col>
                <Col lg="6" xl="3">

                </Col>
                <Col lg="6" xl="3">

                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
