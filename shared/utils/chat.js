import { setMessages } from "../../components/redux/featchers/socket/chat/chatSlice";
import { useSelector, useDispatch } from "react-redux";

export const updateDirectChatHistoryIfActive = (data) => {
  const dispatch = useDispatch();
  const { participants, messages } = data;

  const receiverId = useSelector((state) => state.chat.chosenChatDetails?.id);
  const userId = useSelector((state) => state.auth.userDetails?._id);

  console.log(receiverId, userId, participants, messages);

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    const result = participants.every((participantId) =>
      usersInConversation.includes(participantId)
    );

    if (result) {
      dispatch(setMessages(messages));
    }
  }
};
