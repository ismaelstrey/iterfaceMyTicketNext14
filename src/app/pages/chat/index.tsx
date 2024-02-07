import React from "react";
import ChatUser from "./chatUser";
import ChatBoard from "./chatBoard";
import FormText from "./formText";

function Chat() {
  return (
    <div className="flex min-h-screen w-screen">
      <ChatUser />
      <ChatBoard>
        <FormText />
      </ChatBoard>
    </div>
  );
}

export default Chat;
