import * as React from "react";
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Media,
    UncontrolledDropdown,
    UncontrolledTooltip
} from "reactstrap";
import {retrieveImageService} from "../../../services/profilePhotoFetcher/profilePhotoFetcher";



class UserTableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profilePhoto:  require("../../../assets/img/theme/blank-profile.png"),
        }
        const {  profileImg } = this.props;
        this.fetchImage( profileImg );
    }

    // fetch image from S3
    fetchImage = async ( profileImg ) => {
        if ( profileImg ) {
            try {
                const imageData = await retrieveImageService(profileImg.key);
                this.setState({
                    profilePhoto: imageData,
                })
            } catch (err) {
                console.log('error: ', err);
            }
        }
    }

    render() {
        const {name,id, heartRate } = this.props;
        const { profilePhoto } = this.state;
        let statusClass = "bg-success";
        /*switch (status.code) {
            case -1:{
                statusClass = "bg-warning"
                break;
            }
            case 0:{
                statusClass = "bg-success"
                break;
            }
            case 1:{
                statusClass = "bg-warning"
                break;
            }
            case 3:{
                statusClass = "bg-info"
                break;
            }
            case 4:{
                statusClass = "bg-danger"
                break;
            }
            default:
                break;
        }*/
        return (
            <tr>
                <th scope="row">
                    <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                                {name}
                            </span>
                    </Media>
                </th>
                <td>
                    <div className="avatar-group">
                        <a
                            className="avatar avatar-sm"
                            href="#pablo"
                            id={"tooltip" + id}
                            onClick={e => e.preventDefault()}
                        >
                            <img
                                alt="..."
                                className="rounded-circle"
                                src={profilePhoto}
                            />
                        </a>
                        <UncontrolledTooltip
                            delay={0}
                            target={"tooltip" + id}
                        >
                            {name}
                        </UncontrolledTooltip>
                    </div>
                </td>
                <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className={statusClass} />
                        {/*status.description*/} Not yet implemented
                    </Badge>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span className="mr-2">
                            {heartRate}
                        </span>
                    </div>
                </td>
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
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Locate User
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Emergency Contact
                            </DropdownItem>
                            <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                                Resolve Issue
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </td>
            </tr>
        )
    }
}

export default UserTableItem;