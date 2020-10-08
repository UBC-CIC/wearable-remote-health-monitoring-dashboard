import * as React from "react";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import DeleteLocationModal from "../DeleteLocationModal/DeleteLocationModal";
import LocationMap from "./LocationMap/LocationMap";



class LocationTableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deleteLocationModalShow: false,
        }
    }


    // Triggers the opening/closing of the deleteLocationModal
    setDeleteLocationModalShow = (bool) => {
        this.setState({
            deleteLocationModalShow: bool,
        });
    };


    render() {
        const {location} = this.props;
        const {deleteLocationModalShow} = this.state;
        return(
            <tr>
                <th scope="row">
                    {location.locationName}
                </th>
                <td><LocationMap path={location.boundary} /></td>
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
                                onClick={() => this.setDeleteLocationModalShow(true)}
                            >
                                Delete Location
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <DeleteLocationModal show={deleteLocationModalShow} location={location} onHide={() => this.setDeleteLocationModalShow(false)} />
                </td>
            </tr>
        )
    }

}

export default LocationTableItem;