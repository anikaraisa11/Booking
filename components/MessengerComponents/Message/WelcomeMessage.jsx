import React from "react";

const WelcomeMessage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Welcome to the Chat App</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            Select a conversation to start chatting with your friends and
            colleagues.
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
