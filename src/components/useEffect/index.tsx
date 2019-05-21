import { any } from "prop-types";
import React, { useEffect, useState } from "react";

// const ChatAPI = {
//   subscribeToFriendStatus: (a, b) => void,
//   unsubscribeFromFriendStatus: (a, b) => void
// };

// 工具useFriendStatus  实现关注点分离
function useFriendStatus(friendID: number) {
  const [isOnline, setIsOnline] = useState(null);

  // 关注点分离，让一个钩子只做一件事情
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  function handleStatusChange(status: any) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    // return () => {
    //     ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    // };
  });

  return isOnline;
}

function FriendStatus(props: any) {
  // 使用同一个工具函数useFriendStatus
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
FriendStatus({ friend: { id: 123, name: "eva" } });

function FriendListItem(props: any) {
  // 使用同一个工具函数useFriendStatus
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
FriendListItem({ friend: { id: 456, name: "eva11" } });

/*
  todo: Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state —— 因此你可以在单个组件中多次调用同一个自定义 Hook。
*/
