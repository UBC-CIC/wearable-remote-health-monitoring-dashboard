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
import {connect} from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "../../../components/Headers/UserHeader.js";
import DeleteUserModal from "../../../components/UserProfile/DeleteUserModal/DeleteUserModal";
// actions
import {updateUserInformation} from "../../../actions/userActions";

class Profile extends React.Component {

  constructor(props) {
    super(props);
    const {location} = this.props;
    let userID = location.pathname.replace(/.admin.user-profile./, "");
    console.log("userProfile found: ", userID);
    let userProfile = this.findUser(userID);
    this.state = {
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        age: userProfile.age,
        facility: userProfile.facility,
        room: userProfile.room.roomNumber,
        phoneNumber: userProfile.phoneNumber,
        email: userProfile.email,
        streetAddress: userProfile.address.streetAddress,
        city: userProfile.address.city,
        stateProvince: userProfile.address.stateProvince,
        country: userProfile.address.country,
        postalZip: userProfile.address.postalZip,
        heartRate: 0,
        additionalNotes: userProfile.additionalNotes,
        emergencyContacts: [],
        careGivers: [],
      originalProfile: userProfile,
      editMode: false,
      profileInfoEdited: false,
      deleteModalShow: false,
    }
  }

  findUser = (id) => {
    const {users} = this.props;
    console.log(users);
    return users.find(user => user.id === id);
  }

  // Toggles profile edit mode on/off when "Edit/Save" button clicked. If changes were made, transmit them
  toggleEdit = (e) => {
    e.preventDefault();
    const {editMode, profileInfoEdited} = this.state;
    // if save profile button clicked, propagate updated profile information
    if (editMode && profileInfoEdited) {
      const {originalProfile, firstName, lastName, age, facility, room, phoneNumber, email,
        streetAddress, city, stateProvince, country, postalZip, additionalNotes, emergencyContacts, careGivers} = this.state;
      const {updateUserInformation: updateUserInfo} = this.props;
      const updatedUser = {
        ...originalProfile,
        firstName: firstName, lastName: lastName, age: age, facility: facility, room: room, phoneNumber: phoneNumber,
        email: email, address: {streetAddress: streetAddress, city: city, stateProvince: stateProvince,
          country: country, postalZip: postalZip}, additionalNotes: additionalNotes, emergencyContacts: emergencyContacts,
        careGivers: careGivers
      }
      updateUserInfo(updatedUser);
    }

    // toggle edit mode on/off
    this.setState({
      editMode: !editMode
    })
  }

  // handles profile information edits
  handleChange = (e) => {
    e.preventDefault();
    // edit any profile information changes, set profileInfoEdited flag to true
    this.setState({
      [e.target.id] : e.target.value,
      profileInfoEdited: true,
    })
  }

  // Triggers the opening/closing of the DeleteUserModal
  setDeleteModalShow = (bool) => {
    this.setState({
      deleteModalShow: bool,
    });
  };

  render() {
    const { originalProfile, firstName, lastName, age, facility, room, phoneNumber, email,
      streetAddress, city, stateProvince, country, postalZip, heartRate, additionalNotes ,editMode, deleteModalShow } = this.state;
    const { isLoading } = this.props;
    if (isLoading) {
      return(
          <div>
            Page is loading..
          </div>
      )
    } else {
      return (
          <div>
            <UserHeader userName={firstName + " " + lastName}/>
            {/* Page content */}
            <Container className="mt--7" fluid>
              <Row>
                <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                  <Card className="card-profile shadow">
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                                alt="..."
                                className="rounded-circle"
                                src={require("../../../assets/img/theme/blank-profile.png")}
                            />
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                        <Button
                            className="mr-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                        >
                          Device Options
                        </Button>
                        <Button
                            className="float-right"
                            color="warning"
                            href="#"
                            onClick={() => this.setDeleteModalShow(true)}
                            size="sm"
                        >
                          Delete User
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="pt-0 pt-md-4">
                      <Row>
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                            <div>
                              <span className="heading">{(room) ? room : "N/A"}</span>
                              <span className="description">Room</span>
                            </div>
                            <div>
                              <span
                                  className="heading">{(heartRate || heartRate === 0) ? heartRate + " BPM" : "N/A"}</span>
                              <span className="description">Heart Rate</span>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <div className="text-center">
                        <h3>
                          {firstName + " " + lastName}
                          <span className="font-weight-light">, {(age) ? age : "N/A"}</span>
                        </h3>
                        <div className="h5 font-weight-300">
                          {facility}
                        </div>
                        <div className="h5 mt-4">
                          <i className="ni ni-pin-3 mr-2"/>
                          Last Known Location
                        </div>
                        <div>
                          Latitude, Longitude
                        </div>
                        <div className="h5 mt-4">
                          <i className="ni ni-check-bold mr-2" style={{"color": "green"}}/>
                          Device #45235 connected and active
                        </div>
                        <hr className="my-4"/>
                        <h2>Additional Notes</h2>
                        <p>
                          {(additionalNotes !== null) ? additionalNotes : "N/A"}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="order-xl-1" xl="8">
                  <Card className="bg-secondary shadow">
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Account Information</h3>
                          <h5>* indicates a required field</h5>
                        </Col>
                        <Col className="text-right" xs="4">
                          <Button
                              color={(editMode) ? "danger" : "primary"}
                              href="#"
                              onClick={this.toggleEdit}
                              size="md"
                          >
                            {(editMode) ? "Save Changes" : "Edit Profile"}
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="firstName"
                                >
                                  First Name*
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="firstName"
                                    defaultValue={firstName}
                                    type="text"
                                    onChange={this.handleChange}
                                    required={true}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="lastName"
                                >
                                  Last Name*
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="lastName"
                                    defaultValue={lastName}
                                    type="text"
                                    onChange={this.handleChange}
                                    required={true}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="age"
                                >
                                  Age
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="age"
                                    defaultValue={age}
                                    onChange={this.handleChange}
                                    type="number"
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="facility"
                                >
                                  Facility Name
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="facility"
                                    defaultValue={facility}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="room"
                                >
                                  Assigned Room
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="room"
                                    defaultValue={room}
                                    onChange={this.handleChange}
                                    type="text"
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4"/>
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="phoneNumber"
                                >
                                  Phone Number
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="phoneNumber"
                                    defaultValue={phoneNumber}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="email"
                                >
                                  Email Address
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="email"
                                    defaultValue={email}
                                    type="email"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="streetAddress"
                                >
                                  Street Address
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="streetAddress"
                                    defaultValue={streetAddress}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="city"
                                >
                                  City
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="city"
                                    defaultValue={city}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="stateProvince"
                                >
                                  State/Province
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="stateProvince"
                                    defaultValue={stateProvince}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="country"
                                >
                                  Country
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="country"
                                    defaultValue={country}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="postalZip"
                                >
                                  Postal/Zip Code
                                </label>
                                <Input
                                    className="form-control-alternative"
                                    id="postalZip"
                                    defaultValue={postalZip}
                                    type="text"
                                    onChange={this.handleChange}
                                    disabled={!editMode}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4"/>
                        {/* Description */}
                        <h6 className="heading-small text-muted mb-4">About Resident</h6>
                        <div className="pl-lg-4">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="additionalNotes"
                            >Additional Notes</label>
                            <Input
                                className="form-control-alternative"
                                id="additionalNotes"
                                defaultValue={additionalNotes}
                                rows="4"
                                type="textarea"
                                onChange={this.handleChange}
                                disabled={!editMode}
                            />
                          </FormGroup>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            <DeleteUserModal show={deleteModalShow} userID={originalProfile.id} userName={firstName + " " + lastName}
                             onHide={() => this.setDeleteModalShow(false)}/>
          </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isLoading: state.applicationStatus.startupLoading,
  };
};

export default connect(mapStateToProps, {updateUserInformation}) (Profile);
