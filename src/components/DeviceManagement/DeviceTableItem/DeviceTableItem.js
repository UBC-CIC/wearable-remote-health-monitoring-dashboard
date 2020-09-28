import * as React from "react";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import UnpairDeviceModal from "../UnpairDeviceModal/UnpairDeviceModal";
import PairDeviceModal from "../PairDeviceModal/PairDeviceModal";


class DeviceTableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unpairDeviceModalShow: false,
            pairDeviceModalShow: false,
            userAssociated: false,
        }
    }

    componentDidMount() {
        const {associatedUserID} = this.props;
        if (associatedUserID !== "NONE") {
            this.setState({
                userAssociated: true,
            })
        }
    }

    // Triggers the opening/closing of the unpairDeviceModal
    setUnpairDeviceModalShow = (bool) => {
        this.setState({
            unpairDeviceModalShow: bool,
        });
    };

    // Triggers the opening/closing of the pairDeviceModal
    setPairDeviceModalShow = (bool) => {
        this.setState({
            pairDeviceModalShow: bool,
        });
    };


    render() {
        const {device, associatedUserID, associatedUserName} = this.props;
        const {unpairDeviceModalShow, pairDeviceModalShow, userAssociated} = this.state;
        return(
            <tr>
                <th scope="row">
                    {device.id}
                </th>
                <td>{(device.deviceStatus === null)? "N/A" : device.deviceStatus}</td>
                <td>{associatedUserName + ": " + associatedUserID}</td>
                <td className="text-right">
                    <UncontrolledDropdown>
                        <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            {(userAssociated)?
                                <DropdownItem
                                href=""
                                onClick={() => this.setUnpairDeviceModalShow(true)}
                            >
                                Unpair Device
                            </DropdownItem>
                                :
                                <DropdownItem
                                    href=""
                                    onClick={() => this.setPairDeviceModalShow(true)}
                                >
                                    Pair Device
                                </DropdownItem>
                            }
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <PairDeviceModal show={pairDeviceModalShow} device={device} onHide={() => this.setPairDeviceModalShow(false)} />
                    <UnpairDeviceModal show={unpairDeviceModalShow} deviceID={device.id} userName={associatedUserName} userID={associatedUserID} onHide={() => this.setUnpairDeviceModalShow(false)} />
                </td>
            </tr>
        )
    }

}

export default DeviceTableItem;