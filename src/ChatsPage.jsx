import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "846708be-9be5-4528-8e9a-9c98eda0faef", //project ID from chatengine
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{height: "100vh"}}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{height:'100%'}}/>
    </div>
  );
};

export default ChatsPage;
