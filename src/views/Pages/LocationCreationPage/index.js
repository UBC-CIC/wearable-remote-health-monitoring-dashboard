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
import GoogleMap from "google-map-react";
import { Card, Container, Row, Col, CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input } from "reactstrap";
import LocationCreationHeader from "../../../components/Headers/LocationCreationHeader";


class CreateLocation extends React.Component {

    static defaultProps = {
        center: [49.263232, -123.25429],
        zoom: 17,
    }

    constructor(props) {
        super(props);
        this.state = {
            locationName: "",
        }
    }

    handleFormChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }

  render() {
        const {center, zoom} = this.props;
    return (
      <div>
        <LocationCreationHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
              <Col lg="6">
                  <Card className="bg-secondary shadow">
                      <CardHeader className={"bg-white border-0"}>
                        <Row className="align-items-center">
                            <Col xs="8">
                                <h3 className="mb-0">New Location Information</h3>
                                <h5>* indicates a required field</h5>
                            </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                          <Form>
                              <div className="pl-lg-1">
                                  <Row>
                                      <Col >
                                          <FormGroup>
                                              <label
                                                  className="form-control-label"
                                                  htmlFor="locationName"
                                              >
                                                  Location Name*
                                              </label>
                                              <Input
                                                  className="form-control-alternative"
                                                  id="locationName"
                                                  placeholder="Home"
                                                  type="text"
                                                  onChange={this.handleFormChange}
                                                  required={true}
                                              />
                                          </FormGroup>
                                      </Col>
                                  </Row>
                              </div>
                          </Form>
                      </CardBody>
                  </Card>
              </Col>
            <Col lg="6">
              <Card className="shadow border-0" style={{width: "450px", height: "400px"}}>
                <GoogleMap
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                    libraries: ['drawing', 'geometry', 'places']
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateLocation;
