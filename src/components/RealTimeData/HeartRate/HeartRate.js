import React from "react";
import {connect} from "react-redux";


class HeartRate extends React.Component {

    constructor(props) {
        super(props);
        const {deviceID} = this.props;
        let device = "NONE";
        if (deviceID) {
            device = deviceID;
        }
        this.state = {
            deviceID: device,
            heartRate: 0,
        }
    }

    componentDidMount() {
        this.updateHeartRate();
    }

    componentDidUpdate(prevProps) {
        if (this.props.devices !== prevProps.devices) {
            this.updateHeartRate();
        }
    }

    updateHeartRate = () => {
        const { devices } = this.props;
        const { deviceID } = this.state;
        let device = devices.find(device => device.id === deviceID);
        if (device) {
            this.setState({
                heartRate: device.lastHeartRate,
            })
        }
    }

    render() {
        const { deviceID, heartRate } = this.state;

        return <div>
            {(deviceID !== "NONE")?
                heartRate
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

export default connect(mapStateToProps) (HeartRate);
