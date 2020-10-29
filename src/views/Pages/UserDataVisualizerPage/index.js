import React from "react";
import {connect} from "react-redux";
import { API } from 'aws-amplify';
import {Card, Container, CardHeader, CardBody, Col} from "reactstrap";
import DataVisualizerHeader from "../../../components/Headers/DataVisualizerHeader";
import {listDatas} from "../../../graphql/queries";
import LineGraph from "../../../components/UserDataVisualizer/LineGraph/LineGraph";
import LinearProgress from '@material-ui/core/LinearProgress';



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
            dataType: "heart_rate",
            dataLoading: true,
            hasData: false,
            rawData: null,
            processedData: null,
            isLoading: false,
            progress: 10,
        }
    }

    findUser = (id) => {
        const {users} = this.props;
        return users.find(user => user.id === id);
    }

    async componentDidMount() {
        const {userID} = this.state;
        this._isMounted = true;
        if (this._isMounted && userID) {
            this.setState({
                isLoading: true,
            })
            await this.fetchUserData(userID);
            this.setState({
                isLoading: false,
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchUserData = async (userID) => {
        if (!this._isMounted) {
            return;
        }
        try {
            let filter = {
                 userID: {eq: userID},
                 observationType: {eq: "heart_rate"}
            }

            API.graphql({query: listDatas, variables: {filter: filter}}).then((response) => {
                const data = response.data.listDatas.items;
                if (data.length !== 0) {
                    this.setState({
                        hasData: true
                    })
                } else {
                    return;
                }
                this.setState({
                    rawData: data,
                })
                console.log(data);
                this.processData();
            }).catch((err) => {
                console.log("Error fetching user data: ", err);
            })

        } catch (err) {
            console.log("Sorry, an error occurred during data retrieval: ", err);
        }
    }

    processData = () => {
        if (!this._isMounted) {
            return;
        }
        const { rawData } = this.state;
        let dataLength = rawData.length;
        let progress = 10;
        let progressStep = 90/dataLength;
        rawData.sort(function(a,b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        let data = [];
        if (rawData) {
            rawData.forEach(record => {
                data.push({x: new Date(record.createdAt.slice(0, -1)), y: parseInt(record.observationValue) });
                progress += progressStep;
                this.setState({
                    progress: progress,
                })
            })
        }
        let processedData = [
            {
                id: "heart_rate",
                color: "hsl(0,100%,25%)",
                data: data,
            }
        ]
        console.log("Proccessed Data: ", processedData);
        this.setState({
            processedData: processedData,
            isLoading: false,
        })
    }

    render() {
        const {processedData, hasData, isLoading, progress, dataType} = this.state;
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
                                    {(hasData && !isLoading)?
                                        <LineGraph data={processedData} />
                                    :
                                        null
                                    }
                                    {(isLoading)?
                                        <div className={"row"} style={{width: "800px", height: "400px"}}>
                                            <div className={"col d-flex justify-content-center align-items-center"}>
                                                <LinearProgress variant="determinate" value={progress} />
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                    {(!hasData && !isLoading)?
                                        <div className={"row"} style={{width: "800px", height: "400px"}}>
                                            <div className={"col d-flex justify-content-center align-items-center"}>
                                                <h1>
                                                    Sorry, no data of type '{dataType}' is available!
                                                </h1>
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
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


