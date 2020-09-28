import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import PageContainer from "./views/PageContainer/index";
import LoadingPage from "./views/Pages/LoadingPage";

// actions
import {fetchUsers} from "./actions/userActions";
import {fetchRooms} from "./actions/roomActions";
import {fetchDevices} from "./actions/deviceActions";

class App extends React.Component {

  constructor(props) {
    super(props);
    const {fetchUsers, fetchRooms, fetchDevices} = this.props;
    fetchUsers();
    fetchRooms();
    fetchDevices();
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
    fetchRooms,
    fetchDevices
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
