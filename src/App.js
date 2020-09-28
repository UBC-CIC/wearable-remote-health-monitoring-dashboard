import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import PageContainer from "./views/PageContainer/index";
import LoadingPage from "./views/Pages/LoadingPage";

// actions
import {fetchUsers} from "./actions/userActions";
import {fetchRooms} from "./actions/roomActions";

class App extends React.Component {

  constructor(props) {
    super(props);
    const {fetchUsers, fetchRooms} = this.props;
    fetchUsers();
    fetchRooms();
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

export default connect(mapStateToProps, {fetchUsers, fetchRooms})(App);
