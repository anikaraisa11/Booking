import ReactPlayer from "react-player";
import cx from "classnames";
import styles from "@/components/MessengerComponents/Screens/Player/player.module.css";
import { Mic, MicOff, UserSquare2 } from "lucide-react";

const Player = ({ url, muted, playing, isActive }) => {
  return (
    <div
      className={cx(styles.playerContainer, {
        [styles.notActive]: !isActive,
        [styles.active]: isActive,
        [styles.notPlaying]: !playing,
      })}
    >
      {playing ? (
        <ReactPlayer
          url={url}
          muted={muted}
          playing={playing}
          width="100%"
          height="100%"
        />
      ) : (
        <UserSquare2 className={styles.user} size={isActive ? 400 : 150} />
      )}

      {!isActive ? (
        muted ? (
          <MicOff size={20} className={styles.icon} />
        ) : (
          <Mic size={20} className={styles.icon} />
        )
      ) : undefined}
    </div>
  );
};

export default Player;
