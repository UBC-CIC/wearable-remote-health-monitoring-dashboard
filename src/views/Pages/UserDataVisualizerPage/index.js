import React from "react";
import {connect} from "react-redux";


class DataVisualizer extends React.Component {

    constructor(props) {
        super(props);
        const {location } = this.props;
        let userID = location.pathname.replace(/.admin.data-visualizer./, "");
        console.log("Data userID found :", userID);
        let userProfile = this.findUser(userID);

    }

    findUser = (id) => {
        const {users} = this.props;
        return users.find(user => user.id === id);
    }


    render() {
        return (
            <div>


            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        devices: state.devices,
        isLoading: state.applicationStatus.startupLoading,
    };
};

export default connect(mapStateToProps) (DataVisualizer);


