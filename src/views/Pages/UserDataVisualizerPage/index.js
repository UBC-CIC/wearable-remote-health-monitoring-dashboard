import React from "react";
import {connect} from "react-redux";
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import {Card, Container, CardHeader, CardBody, Col} from "reactstrap";
import DataVisualizerHeader from "../../../components/Headers/DataVisualizerHeader";
import {listDatas} from "../../../graphql/queries";


class DataVisualizer extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        const {location } = this.props;
        let userID = location.pathname.replace(/.admin.data-visualizer./, "");
        console.log("Data userID found :", userID);
        let userProfile = this.findUser(userID);
        this.state = {
            userID: userProfile.id,
            dataLoading: true,
        }
    }

    findUser = (id) => {
        const {users} = this.props;
        return users.find(user => user.id === id);
    }

    async componentDidMount() {
        const {userID} = this.state;
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchUserData = async (userID) => {

        try {
            let filter = {
                userID: userID,
                observationType: "heart_rate"
            }
            API.graphql({query: listDatas, variables: {filter: filter}}).then((response) => {
                //const alerts = response.data.listAlerts.items;
                console.log(response);
            }).catch((err) => {
                console.log("Error fetching user data: ", err);
            })

        } catch (err) {

        }
    }

    render() {
        return (
            <div>
                {/*Header*/}
                <div>
                <DataVisualizerHeader />
                </div>
                {/*Page Content*/}
                <div>
                    <div className={"row"}>
                        <div className={"col d-flex justify-content-center"}>
                            <Card className="bg-secondary shadow">
                                <CardBody>
                                    Something here
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

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


