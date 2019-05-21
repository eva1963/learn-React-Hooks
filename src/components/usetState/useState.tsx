import React, { useEffect, useState } from "react";
import "../../App";

export const Example2 = () => {
  // <!-- 我们从React导入useState Hook。它允许我们将本地状态保存在功能组件中 -->
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(1);

  // 声明多个变量
  // const [fruit, setFruit] = useState("banana");
  // const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  // 不需要清除的Effect
  useEffect(() => {
    console.log(111, "useEffect更新count的值啦!!");
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    console.log(222, "useEffect更新index的值啦!!");
    document.title = `You clicked ${index} times`;
  }, []); // [index]&[]的区别？？？

  return (
    <div style={{ textAlign: "center" }}>
      <h2>count的值目前是{count} </h2>
      {/* 当用户点击时，我们使用新值调用setCount。然后，React将重新呈现Example组件，并将新计数值传递给它 */}
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <h3>Index的值目前是{index}</h3>
      <button onClick={() => setIndex(index + 2)}>add Index</button>
    </div>
  );
};
