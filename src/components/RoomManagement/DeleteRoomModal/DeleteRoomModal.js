import * as React from "react";
import Modal from "react-bootstrap/Modal";
import {Button, FormGroup, Input} from "reactstrap";
import { connect } from "react-redux";
import { deleteRoomRequest } from "../../../actions/roomActions";



class DeleteRoomModal extends React.Component {


    // handles deleting the room
    onDelete = (e) => {
        e.preventDefault();
        const { deleteRoomRequest: deleteRoom, roomID, onHide } = this.props;
        let payload = { id: roomID };
        deleteRoom(payload);
        onHide();
    }

    // handles cancelling/closing the modal
    onCancel = (e) => {
        e.preventDefault();
        const {onHide} = this.props;
        onHide();
    }


    render() {
        const { show, onHide, roomID, roomNumber } = this.props;

        return(
            <div>
                <Modal
                    onHide={onHide}
                    size="sm"
                    show={show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <div className="row">
                                <div className="col d-flex justify-content-center align-items-center">
                                    Delete Room
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                               Are you sure you want to delete Room {roomNumber}, with ID {roomID}?
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
                                    Cancel
                                </Button>
                            </div>
                            <div className={"col-6 d-flex justify-content-center"}>
                                <Button
                                    color="danger"
                                    onClick={this.onDelete}
                                >
                                    Confirm Deletion
                                </Button>
                            </div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

const mapDispatchToProps = {
    deleteRoomRequest,
};


export default connect(null, mapDispatchToProps)(DeleteRoomModal);