import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
import styles from "@/components/MessengerComponents/Screens/CopySection/CopySection.module.css";

const CopySection = ({ roomId }) => {
  console.log(roomId);
  return (
    <div className={styles.copyContainer}>
      <div className={styles.copyHeading}>Copy Room ID: </div>
      <hr />
      <div className={styles.copyDescription}>
        <span>{roomId}</span>
        <CopyToClipboard text={roomId}>
          <Copy className="ml-3 cursor-pointer" />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;
