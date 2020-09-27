import React from "react";
import {connect} from "react-redux";
import { Spinner } from 'reactstrap';
import { withRouter } from "react-router-dom";


class LoadingPage extends React.Component {


    render() {
        const {isLoading} = this.props;
        if (!isLoading) {
            const {history} = this.props;
            history.push("/admin/index");
        }
        return(
            <div>
                <div className={"row"}>
                    <div className={"col d-flex justify-content-center"}>
                        Application is Loading...
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col d-flex justify-content-center"}>
                        <Spinner color="info" />
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

export default withRouter(connect(mapStateToProps, null)(LoadingPage));