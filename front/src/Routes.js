import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Main from './telas/Main';
import MainTabela from './telas/lista/MainTabela';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class Routes extends Component {
  render(){
    return(
      <div id="App">
      <BrowserRouter>
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}></Sidebar>
          <div id="page-wrap">
            {/* `component` will render when `path` matches the user's location */}
            {/* `exact` makes it so it only renders if `path` matches exactly. */}
            {/* Otherwise, `HomePage` would render on "mysite.com/About" as well as "mysite.com/". */}
            <Route exact path="/" component={Main} />
            <Route path="/lista" component={MainTabela} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}