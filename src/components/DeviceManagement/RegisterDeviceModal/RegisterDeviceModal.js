import * as React from "react";
import Modal from "react-bootstrap/Modal";
import {Button, FormGroup, Input} from "reactstrap";
import { connect } from "react-redux";
import { registerNewDevice } from "../../../actions/deviceActions";



class RegisterDeviceModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceID: "",
            deviceIDUnique: false,
            deviceSerial: "",
            availableUsers: [],
            selectedUserID: "",
            defaultUser: "",
        }
    }

    componentDidMount() {
        this.populateFormFields();
    }

    //  check for users without a registered device
    populateFormFields = () => {
        const {users} = this.props;
        let availableUsers = [];
        users.forEach(user => {
            if (Object.keys(user.device).length === 0) {
                availableUsers.push(user);
            }
        });
        // save the available users to the local state
        this.setState({
            availableUsers: availableUsers,
        });
        // set default value for select input (handleChange isn't triggered if first option is selected)
        if (availableUsers.length >= 1) {
            this.setState({
                selectedUserID: availableUsers[0].id,
            });
        }
    }



    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        })
        if(e.target.id === "deviceID") {
            let isUnique = this.deviceUnique(e.target.value);
            this.setState({
                deviceIDUnique: isUnique,
            })
        }
    }

    // checks that the given device ID is unique
    deviceUnique = (id) => {
        const { devices } = this.props;
        let isUnique = true;
        devices.forEach(device => {
            if (device.id === id) {
                isUnique = false;
            }
        });
        return isUnique;
    }

    // handles adding the new device
    onAdd = (e) => {
        e.preventDefault();
        const {registerNewDevice, onHide} = this.props;
        const {deviceID, deviceSerial, selectedUserID, availableUsers} = this.state;
        let selectedUser = availableUsers.find(user => user.id === selectedUserID);
        let newDevice = {id: deviceID, deviceSerial: deviceSerial, deviceStatus: "Active",
            associatedUserName: selectedUser.firstName + " " + selectedUser.lastName, associatedUserID: selectedUserID};
        registerNewDevice(newDevice);
        onHide();
    }

    // handles cancelling/closing the form
    onCancel = (e) => {
        e.preventDefault();
        const {onHide} = this.props;
        onHide();
    }


    render() {
        const { show, onHide } = this.props;
        const { deviceIDUnique, availableUsers } = this.state;

        let userOptions = availableUsers.map(user => {
            return(
                <option key={user.id} value={user.id}>{user.firstName  + " " + user.lastName + ": " + user.id}</option>
            )
        });

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
                                    Add New Device
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col-6 d-flex justify-content-center"}>
                                    <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="deviceID"
                                    >
                                        <span>Unique Device ID{(!deviceIDUnique)?
                                            <i className={"far fa-times-circle"} style={{color: "red"}} /> :
                                            <i className={"far fa-check-circle"} style={{color: "green"}} />}</span>
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="deviceID"
                                        type="text"
                                        onChange={this.handleChange}
                                        required={true}
                                    />
                                </FormGroup>
                            </div>
                            <div className={"col-6 d-flex justify-content-center"}>
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="deviceSerial"
                                    >
                                        Device Serial
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="deviceSerial"
                                        type="text"
                                        onChange={this.handleChange}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="selectedUserID"
                                    >
                                        Available Users
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="selectedUserID"
                                        type="select"
                                        onChange={this.handleChange}
                                        required={true}
                                    >
                                        <option disabled>User</option>
                                        {userOptions}
                                    </Input>
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
                                    disabled={!deviceIDUnique}
                                >
                                    Add Device
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
    registerNewDevice,
};

const mapStateToProps = (state) => {
    return {
        devices: state.devices,
        users: state.users,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDeviceModal);