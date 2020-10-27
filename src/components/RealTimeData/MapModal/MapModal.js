import * as React from "react";
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button} from "reactstrap";
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react';

/*
* Description: Displays user's real-time location on a map
* Required Input: device ID
* */
class MapModalContainer extends React.Component{

    constructor(props) {
        super(props);
        const {deviceID} = this.props;
        let device = "NONE";
        if (deviceID) {
            device = deviceID;
        }
        this.state = {
            deviceID: device,
            location: {lat: 0, lng: 0},
            locationDataAvailable: false,
        }
    }

    componentDidMount() {
        this.updateLocation();
    }

    componentDidUpdate(prevProps) {
        if (this.props.devices !== prevProps.devices) {
            this.updateLocation();
        }
    }

    updateLocation = () => {
        const { devices } = this.props;
        const { deviceID } = this.state;
        let device = devices.find(device => device.id === deviceID);
        if (device && device.lastLocation) {
            this.setState({
                location: device.lastLocation,
                locationDataAvailable: true,
            })
        }
    }

    // handles cancelling/closing the form
    onCancel = (e) => {
        e.preventDefault();
        const {onHide} = this.props;
        onHide();
    }

    render() {
        const { show, onHide } = this.props;
        const { location, locationDataAvailable } = this.state;
        const containerStyle = {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
        return(
            <div>
                <Modal
                    onHide={onHide}
                    size="md"
                    show={show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <div className="row">
                                <div className="col d-flex justify-content-center align-items-center">
                                    User Location
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                                {(!locationDataAvailable)? "Sorry no location data for this user is available at this time." : null}
                            </div>
                        </div>
                        <div className={"row"} style={{width: "480px", height: "380px"}}>
                            <div className={"col d-flex justify-content-center"}>
                                <Map google={this.props.google}
                                     zoom={19}
                                     containerStyle={containerStyle}
                                     initialCenter={{
                                         lat: location.lat,
                                         lng: location.lng
                                     }}
                                >
                                    <Marker
                                        position={{lat: location.lat, lng: location.lng}}
                                    />
                                </Map>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className={"row"}>
                            <div className={"col-6 d-flex justify-content-center"}>
                                <Button
                                    color="primary"
                                    onClick={this.onCancel}
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        devices: state.devices,
    };
};

const MapModal = GoogleApiWrapper({apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(MapModalContainer);

export default connect(mapStateToProps)(MapModal);