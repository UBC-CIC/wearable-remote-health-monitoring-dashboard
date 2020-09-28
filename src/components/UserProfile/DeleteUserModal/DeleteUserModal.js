import * as React from "react";
import Modal from "react-bootstrap/Modal";
import {Button, Input} from "reactstrap";
import {deleteUserRequest} from "../../../actions/userActions"
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";



class DeleteUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationComplete: false,
        }
    }

    // handles confirmation box changes, sets boolean to true when complete
    handleChange = (e) => {
        e.preventDefault();
        // check if confirmation is complete
        if (e.target.value === "confirm") {
            this.setState({
                confirmationComplete: true,
            })
        } else {
            this.setState({
                confirmationComplete: false,
            })
        }
    }

    // handle deletion cancellation event
    onCancel = () => {
        this.setState({
            confirmationComplete: false,
        });
        const {onHide} = this.props;
        onHide();
    }

    onProceed = () => {
        const {deleteUserRequest, userID, history} = this.props;
        deleteUserRequest(userID);
        // redirect to user management page after deleting user
        let path = '/admin/manage-users';
        history.push(path);
    }

    render() {
        const { show, onHide, userName, userID } = this.props;
        const {confirmationComplete} = this.state;
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
                                    Delete Confirmation
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                                Are you sure you want to delete user "{userName}" with ID {userID}?
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col d-flex justify-content-center"}>
                                <p>For deletion, please type "confirm" below then click "Proceed".</p>
                            </div>
                            <br/>
                        </div>
                        <div className={"row"}>
                            <div className={"col-10 d-flex justify-content-center"}>
                                    <Input className="form-control-alternative" type="text" id="confirmationBox" onChange={this.handleChange} />
                            </div>
                            <div className={"col-2"}>
                                {(confirmationComplete)? <i className={"fas fa-check-circle"} style={{color: "green", fontSize: "32px"}} />
                                :
                                    <i className={"fas fa-times-circle"} style={{color: "red", fontSize: "32px"}} />}
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
                                    disabled={!confirmationComplete}
                                    onClick={this.onProceed}
                                >
                                    Proceed
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
    deleteUserRequest,
};

export default withRouter(connect(null, mapDispatchToProps)(DeleteUserModal));
