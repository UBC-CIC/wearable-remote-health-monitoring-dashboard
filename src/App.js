import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
import PageContainer from "./views/PageContainer/index";
import LoadingPage from "./views/Pages/LoadingPage";

// actions
import {fetchUsers} from "./actions/userActions";

class App extends React.Component {

  constructor(props) {
    super(props);
    const {fetchUsers} = this.props;
    fetchUsers();
  }

  render() {
    const {isLoading} = this.props;
    if (isLoading) {
        return(<div>
          <LoadingPage />
        </div>)
    } else {
      return (
          <div>
            <Switch>
              <Route path={"/admin/loading"} component={<LoadingPage/>}/>
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

export default connect(mapStateToProps, {fetchUsers})(App);
