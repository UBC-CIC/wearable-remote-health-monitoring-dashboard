import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import PageContainer from "./views/PageContainer/index";
import LoadingPage from "./views/Pages/LoadingPage";

// actions
import {fetchUsers} from "./actions/userActions";
import {fetchDevices} from "./actions/deviceActions";
import {fetchLocations} from "./actions/locationActions";

class App extends React.Component {

  constructor(props) {
    super(props);
    const {fetchUsers, fetchDevices, fetchLocations} = this.props;
    fetchUsers();
    fetchDevices();
    fetchLocations();
  }

  render() {
    const {isLoading} = this.props;
    if (isLoading) {
        return(<div className={"container"}>
          <LoadingPage />
        </div>)
    } else {
      return (
          <div>
            <Switch>
              <Route path={"/"} render={props => <PageContainer {...props}/>}/>
            </Switch>
          </div>
      )
    }
  }

}


const mapStateToProps = (state) => {
  return {
    isLoading: state.applicationStatus.startupLoading,
  };
};

const mapDispatchToProps = {
    fetchUsers,
    fetchDevices,
    fetchLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
