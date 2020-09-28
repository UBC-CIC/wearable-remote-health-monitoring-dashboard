import React from "react";
import {connect} from "react-redux";
import {CircularProgress} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./LoadingPage.css";


class LoadingPage extends React.Component {


    render() {
        const {isLoading} = this.props;
        if (!isLoading) {
            const {history} = this.props;
            history.push("/admin/index");
        }
        return(
            <div className={"container"}>
                <div className={"row loadRow-1"}>
                    <div className={"col d-flex justify-content-center align-items-end"}>
                        <h1 className={"display-3"}>Application is Loading...</h1>
                    </div>
                </div>
                <div className={"row loadRow-2"}>
                    <div className={"col d-flex justify-content-center align-items-center"}>
                        <CircularProgress />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.applicationStatus.startupLoading,
    };
};

export default withRouter(connect(mapStateToProps)(LoadingPage));