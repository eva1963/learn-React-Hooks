import React from "react";
interface FriendStates {
  count: number;
  isOnline: any;
}

// const ChatAPI = {
//     subscribeToFriendStatus: (a, b) => void,
//     unsubscribeFromFriendStatus: (a, b) => void
//   };

class FriendStatusWithCounter extends React.Component<
  { friend: any },
  FriendStates
> {
  constructor(props: any) {
    super(props);
    this.state = { count: 0, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    // ChatAPI.subscribeToFriendStatus(
    //     this.props.friend.id,
    //     this.handleStatusChange
    // );
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    // ChatAPI.unsubscribeFromFriendStatus(
    //     this.props.friend.id,
    //     this.handleStatusChange
    // );
  }

  handleStatusChange(status: any) {
    this.setState({
      isOnline: status.isOnline
    });
  }
}
