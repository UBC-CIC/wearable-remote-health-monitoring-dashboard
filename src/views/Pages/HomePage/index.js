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
import { connect } from "react-redux";


import Header from "../../../components/Headers/Header.js";


// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import UserTableItem from "../../../components/Dashboard/UserTableItem/UserTableItem";


class HomePage extends React.Component {
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
    const {users} = this.props;
    // map our list of users to the "Current Status" table
    const userList = users.map((user) => {
      return(
          <UserTableItem
              key={user.id}
              name={user.firstName + " " + user.lastName}
              profileImg={user.imageURL}
              id={user.id}
              status={user.status}
              device={user.device}
              heartRate={user.vitals.heartRate}
              profileURL={user.profileURL}
              emergencyContacts={user.emergencyContacts}
          />
          )
    })
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
                    <th scope="col">Heart Rate (BPM)</th>
                    <th scope="col">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {userList}
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(HomePage);
