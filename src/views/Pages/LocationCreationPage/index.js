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
import GoogleMap from "google-map-react";
import {
    Card, Container, Row, Col, CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input, Button
} from "reactstrap";
import LocationCreationHeader from "../../../components/Headers/LocationCreationHeader";
import { v4 as uuidv4 } from "uuid";
import { addNewLocation } from "../../../actions/locationActions";
import MapSearchBox from "../../../components/LocationManagement/MapSearchBox/MapSearchBox";
import "./LoadingCreationPage.css";


class CreateLocation extends React.Component {

    static defaultProps = {
        center: [49.263232, -123.25429],
        zoom: 18,
    }

    constructor(props) {
        super(props);
        this.state = {
            locationName: "",
            boundary: null,
            polygonDrawn: false,
            mapApiLoaded: false,
            mapInstance: null,
            mapApi: null,
            drawMgrInstance: null,
            overlayInstance: null,
            places: [],
        }
    }

    handleFormChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = () => {
        const { locationName, latitude, longitude, radius } = this.state;
        const {addNewLocation: addLocation, history} = this.props;
        const latLon = {latitude: latitude, longitude: longitude};
        const newLocation = {
            id: uuidv4(),
            locationName: locationName,
            centerpoint: latLon,
            radius: radius,
        }
        // submit new location
        addLocation(newLocation);
        // return to location management page after submitting
        let path = "/admin/manage-locations";
        history.push(path);
    }

    apiActions = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });
        let drawingManager = new maps.drawing.DrawingManager({
            drawingMode: maps.drawing.OverlayType.POLYGON,
            drawingControl: false,
            map: map,
            polygonOptions: {
                draggable: true,
                suppressUndo: true,
                editable: true,
                strokeWeight: 2,
                fillOpacity: 0.3,
                fillColor: "#20b2c9",
                strokeColor: "#20b2c9",
            },
        });
        this.setState({
            drawingMgrInstance: drawingManager,
        })
        // add event listener to check for completed polygon drawing, then save boundaries
        maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
            this.drawingComplete(polygon);
        } )

        // save overlay instance for later, so we can clear the map and re-draw a new polygon
        maps.event.addListener(drawingManager, 'overlaycomplete',
                instance => this.setState({ overlayInstance: instance }));
    }


    // get vertices of complete polygon and save them to the local state
    drawingComplete = ( polygon ) => {
        let points = polygon.getPath().getArray().map(point =>
        {return {lat: point.lat(), lng: point.lng()}});
        this.setState({
            boundary: points,
            polygonDrawn: true,
        })
        this.drawingMode("COMPLETE");
        console.log("points", points);
    }

    addPlace = (place) => {
        this.setState({ places: place });
    };

    mapOptions = (maps) => {
        return {
            mapTypeControl: true,
            mapTypeId: maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: maps.ControlPosition.BOTTOM_CENTER,
                mapTypeIds: [
                    maps.MapTypeId.ROADMAP,
                    maps.MapTypeId.HYBRID
                ]
            }
        }
    }

    // handles changing drawing modes, overlay changes, and state updates
    drawingMode = (event) => {
        const { drawingMgrInstance, overlayInstance, mapApi } = this.state;
        switch (event) {
            case "COMPLETE": {
                drawingMgrInstance.setDrawingMode();
                break;
            }
            case "CLEAR_MAP": {
                overlayInstance.overlay.setMap(null);
                drawingMgrInstance.setDrawingMode(mapApi.drawing.OverlayType.POLYGON);
                this.setState({
                    overlayInstance: null,
                    polygonDrawn: false,
                })
                break;
            }
            default:
                break;
        }
    }

    // calls drawing mode to clear map overlay
    handleClearMap = (e) => {
        e.preventDefault();
        const {overlayInstance} = this.state;
        // only call if overlay instance exists
        if (overlayInstance) {
            this.drawingMode("CLEAR_MAP");
        }
    }


  render() {
        const {center, zoom} = this.props;
        const {mapApiLoaded, mapInstance, mapApi, polygonDrawn,  locationName} = this.state;
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
                                                  *Location Name
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
                                  <Row>
                                      <Col>
                                          <label
                                              className="form-control-label"
                                          >
                                              *Step 1: Enter an Address or Location below.
                                          </label>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col >
                                          {mapApiLoaded && <MapSearchBox map={mapInstance} mapApi={mapApi} addplace={this.addPlace}/>}
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col>
                                          <label
                                              className="form-control-label step"
                                          >
                                              *Step 2: Draw the boundaries of the location on the map.
                                          </label>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col className={"d-flex justify-content-center"}>
                                          <Button type={"button"} onClick={this.handleClearMap} color={"primary"}>
                                              Redraw
                                          </Button>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col >
                                          <label
                                              className="form-control-label step"
                                          >
                                              Boundaries Drawn?
                                          </label>
                                         {(polygonDrawn)?
                                      <i className={"far fa-check-circle"} style={{color: "green"}}/>
                                          :
                                          <i className={"far fa-times-circle"} style={{color: "red"}}/>
                                      }
                                      </Col>
                                  </Row>
                              </div>
                              <Row>
                                  <Col lg={"12"} className={"d-flex justify-content-center"}>
                                      <Button type={"submit"} onClick={this.handleSubmit} color="info"
                                     disabled={(!polygonDrawn) || ( locationName.length === 0)}
                                      >
                                          Add Location
                                      </Button>
                                  </Col>
                              </Row>
                          </Form>
                      </CardBody>
                  </Card>
              </Col>
              <Col lg="6" >
                  <Card className="shadow border-0 mapCard" style={{width: "100%", height: "100%"}}>
                      <GoogleMap
                          bootstrapURLKeys={{
                              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                              libraries: ['drawing', 'geometry', 'places']
                          }}
                          defaultCenter={center}
                          defaultZoom={zoom}
                          yesIWantToUseGoogleMapApiInternals
                          onGoogleApiLoaded={({ map, maps }) => this.apiActions(map, maps)}
                          options={this.mapOptions}
                      />
                  </Card>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(null, {addNewLocation})(CreateLocation);
