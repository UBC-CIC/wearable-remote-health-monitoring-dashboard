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

import Header from "../../../components/Headers/Header.js";


// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col, Media, Badge, UncontrolledTooltip, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
    };
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">

            </Col>
            <Col xl="4">

            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Current User Status</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Health Notes</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              John Smith
                            </span>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip742438047"
                            onClick={e => e.preventDefault()}
                        >
                          <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                            delay={0}
                            target="tooltip742438047"
                        >
                          John Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>12345</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        LOST CONTACT
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">
                          <ul>
                          <li>Dementia</li>
                          </ul>
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
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              Jane Doe
                            </span>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip102182364"
                            onClick={e => e.preventDefault()}
                        >
                          <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/team-2-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                            delay={0}
                            target="tooltip102182364"
                        >
                          Jane Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>58943</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        NORMAL
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                        <span className="mr-2">
                          <ul>
                          <li>Alzheimer's</li>
                          </ul>
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
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              Jessica Johnson
                            </span>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip188462246"
                            onClick={e => e.preventDefault()}
                        >
                          <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/team-3-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                            delay={0}
                            target="tooltip188462246"
                        >
                          Jessica Johnson
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>10851</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        OUT OF BOUNDS
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                        <span className="mr-2">
                          <ul>
                          <li>Alzheimer's</li>
                          </ul>
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

                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              Philip Westinghouse
                            </span>
                      </Media>
                    </th>
                    <td>
                      <div className="avatar-group">
                        <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id="tooltip875258217"
                            onClick={e => e.preventDefault()}
                        >
                          <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../../assets/img/theme/team-1-800x800.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                            delay={0}
                            target="tooltip875258217"
                        >
                          Philip Westinghouse
                        </UncontrolledTooltip>
                      </div>
                    </td>
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
                          <ul>
                          <li>High blood pressure</li>
                          </ul>
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
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
