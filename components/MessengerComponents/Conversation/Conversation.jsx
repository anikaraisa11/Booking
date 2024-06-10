import React from "react";
import ConversationCard from "./ConversationCard";

function Conversation({ conversations, selectedChatDetails }) {
  return (
    <div className="overflow-hidden overflow-y-auto bg-white">
      {conversations && conversations.length > 0 ? (
        conversations.map((conversation) => (
          <ConversationCard
            conversation={conversation}
            key={conversation.id}
            selectedChatDetails={selectedChatDetails}
          />
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          No conversations found.
        </div>
      )}
    </div>
  );
}

export default Conversation;
