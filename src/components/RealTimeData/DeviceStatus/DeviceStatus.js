import React from "react";
import {connect} from "react-redux";
import {Badge} from "reactstrap";


class DeviceStatus extends React.Component {

    constructor(props) {
        super(props);
        const {deviceID} = this.props;
        let device = "NONE";
        if (deviceID) {
            device = deviceID;
        }
        this.state = {
            deviceID: device,
            deviceStatus: "N/A",
        }
    }

    componentDidMount() {
        this.updateStatus();
    }

    componentDidUpdate(prevProps) {
        if (this.props.devices !== prevProps.devices) {
            this.updateStatus();
        }
    }

    updateStatus = () => {
        const { devices } = this.props;
        const { deviceID } = this.state;
        let device = devices.find(device => device.id === deviceID);
        if (device) {
            this.setState({
                deviceStatus: device.deviceStatus,
            })
        }
    }

    render() {
        const { deviceID, deviceStatus } = this.state;
        let statusClass = "bg-success";
        switch (deviceStatus) {
            case "Inactive": {
                statusClass = "bg-warning"
                break;
            }
            case "Location_Anomaly": {
                statusClass = "bg-danger"
                break;
            }
            case "HeartRate_Anomaly": {
                statusClass = "bg-danger"
                break;
            }
            case "Low_Battery": {
                statusClass = "bg-important"
                break;
            }
            default:
                break;
        }
        return <div>
            {(deviceID !== "NONE")?
                <div>
                    <i className={statusClass} />
                    {deviceStatus}
                </div>
                :
                "N/A"
            }
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        devices: state.devices,
    };
};

export default connect(mapStateToProps) (DeviceStatus);
