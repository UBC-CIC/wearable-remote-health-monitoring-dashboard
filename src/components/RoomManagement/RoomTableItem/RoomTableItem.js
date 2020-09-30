import * as React from "react";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import DeleteRoomModal from "../DeleteRoomModal/DeleteRoomModal";



class RoomTableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deleteRoomModalShow: false,
        }
    }


    // Triggers the opening/closing of the deleteRoomModal
    setDeleteRoomModalShow = (bool) => {
        this.setState({
            deleteRoomModalShow: bool,
        });
    };



    render() {
        const {room} = this.props;
        const {deleteRoomModalShow} = this.state;
        return(
            <tr>
                <th scope="row">
                    {room.roomNumber}
                </th>
                <td>{room.name}</td>
                <td></td>
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
                                <DropdownItem
                                    href=""
                                    onClick={() => this.setDeleteRoomModalShow(true)}
                                >
                                    Delete Room
                                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <DeleteRoomModal show={deleteRoomModalShow} roomID={room.id} roomNumber={room.roomNumber} onHide={() => this.setDeleteRoomModalShow(false)}   />
                </td>
            </tr>
        )
    }

}

export default RoomTableItem;