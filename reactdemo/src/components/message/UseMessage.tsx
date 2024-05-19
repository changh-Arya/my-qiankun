// useMessage.js

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

const useMessage = () => {
  const [queue, setQueue] = useState([]);

  // 添加消息到队列
  const enqueueMessage = (content) => {
    setQueue((prevQueue) => [...prevQueue, content]);
  };

  // 从队列中移除当前消息
  const dequeueMessage = () => {
    setQueue((prevQueue) => prevQueue.slice(1));
  };

  useEffect(() => {
    // 当队列有消息时，渲染消息组件
    if (queue.length > 0) {
      const message = queue[0];
      const container = document.createElement("div");
      document.body.appendChild(container);

      const handleClose = () => {
        dequeueMessage();
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
      };

      ReactDOM.render(
        <Message content={message} onClose={handleClose} />,
        container
      );
    }
  }, [queue]);

  return {
    enqueueMessage,
  };
};

export default useMessage;
