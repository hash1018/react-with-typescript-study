import { Component } from "react";
import Chatting from "./Chatting";
import ErrorBoundary from "./ErrorBoundary";
import UserList from "./UserList"

export default class App extends Component<{}, {}> {
  state = {};

  render() {
    return (
      <ErrorBoundary>
        <div>
          참여 사용자:
          <UserList users={["11","22"]} />
          <hr />
          <Chatting />
        </div>
      </ErrorBoundary>
      
    );
  }
}