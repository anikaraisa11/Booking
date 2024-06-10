"use client";
import { useSocket } from "@/context/socket";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const usePeer = () => {
  const socket = useSocket();
  const roomId = usePathname().slice(1);
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const isPeerSet = useRef(false);

  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return;
    isPeerSet.current = true;

    // create a immediately invoked function expression

    (async function initPeer() {
      const myPeer = new (await import("peerjs")).default();
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log(`Your peer id is - ${id}`);
        setMyId(id);
        socket?.emit("join-room", roomId, id);
      });
    })();
  }, [roomId, socket]);

  return {
    peer,
    myId,
  };
};

export default usePeer;
