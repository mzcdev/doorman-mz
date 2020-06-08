import React, { Component, Fragment } from 'react';

import { API } from 'aws-amplify'

import StackGrid from "react-stack-grid";

import UserItem from '../component/UserItem';
import HistoryItem from '../component/HistoryItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.getUsers();
  }

  state = {
    users: [],
    history: [],
  }

  getUsers = async () => {
    const url = "https://zio9pumsm3.execute-api.ap-northeast-2.amazonaws.com/demo/users";

    const res = await API.get(url);
    console.log('res', res);

    if (res && res.length > 0) {
      this.setState({
        users: res.users,
        history: res.history,
      });
    }
    else {
      this.setState({
        items: [],
        user_id: "",
      });
    }

    setTimeout(this.getUsers, 5000);
  }

  render() {
    const users = this.state.users.map(
      (item, index) => (<UserItem key={index} item={item} />)
    );

    const history = this.state.history.map(
      (item, index) => (<HistoryItem key={index} item={item} />)
    );

    return (
      <Fragment>
        <div className='grid-visited'>
          <StackGrid columnWidth="100%">
            {users}
          </StackGrid>
        </div>
        <div className='grid-history'>
          <StackGrid columnWidth="100%">
            {history}
          </StackGrid>
        </div>
      </Fragment>
    );
  }
}

export default App;
