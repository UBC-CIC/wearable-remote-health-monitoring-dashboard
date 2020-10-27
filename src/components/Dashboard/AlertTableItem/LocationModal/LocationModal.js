import * as React from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "reactstrap";
import {Map,Marker,GoogleApiWrapper} from 'google-maps-react';


class LocationModal extends React.Component{


    // handles cancelling/closing the form
    onCancel = (e) => {
        e.preventDefault();
        const {onHide} = this.props;
        onHide();
    }

    render() {
        const { show, onHide, location } = this.props;
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
                                    User Location at Time of Alert
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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



export default GoogleApiWrapper({apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY})(LocationModal);