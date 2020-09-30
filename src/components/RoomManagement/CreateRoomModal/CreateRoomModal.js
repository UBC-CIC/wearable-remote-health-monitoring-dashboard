import * as React from "react";
import Modal from "react-bootstrap/Modal";
import {Button, FormGroup, Input} from "reactstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addNewRoom } from "../../../actions/roomActions";



class CreateRoomModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roomNumber: "",
            roomNumberUnique: false,
            name: "",
        }
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        })

        if (e.target.id === "roomNumber") {
            let isUnique = this.roomUnique(e.target.value);
            this.setState({
                roomNumberUnique: isUnique,
            })
        }
    }

    // checks that the given roomNumber is unique
    roomUnique = (roomNum) => {
        const { rooms } = this.props;
        let isUnique = true;
        rooms.forEach(room => {
            if (room.roomNumber === roomNum) {
                isUnique = false;
            }
        });
        return isUnique;
    }


    // handles adding the new room
    onAdd = (e) => {
        e.preventDefault();
        const { addNewRoom: addRoom, onHide } = this.props;
        const { roomNumber, name } = this.state;
        const roomID = uuidv4();
        let newRoom = {id: roomID, roomNumber: roomNumber, name: name};
        addRoom(newRoom);
        onHide();
    }

    // handles cancelling/closing the modal
    onCancel = (e) => {
        e.preventDefault();
        const {onHide} = this.props;
        onHide();
    }


    render() {
        const { show, onHide } = this.props;
        const { roomNumberUnique, roomNumber } = this.state;

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
                                    Add New Room
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="roomNumber"
                                    >
                                        <span>Unique Room Number{(!roomNumberUnique)?
                                            <i className={"far fa-times-circle"} style={{color: "red"}} /> :
                                            <i className={"far fa-check-circle"} style={{color: "green"}} />}</span>
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="roomNumber"
                                        type="text"
                                        onChange={this.handleChange}
                                        required={true}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="name"
                                        type="text"
                                        onChange={this.handleChange}
                                        required={true}
                                    />
                                </FormGroup>
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
                                    onClick={this.onAdd}
                                    disabled={(!roomNumberUnique) || (roomNumber.length === 0)}
                                >
                                    Add Room
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
    addNewRoom,
};

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomModal);