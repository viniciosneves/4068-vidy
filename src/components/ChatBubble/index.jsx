import styles from './chatBubble.module.css';
import ReactMarkdown from 'react-markdown';

export default function ChatBubble({ message, isUser = false }  ) {
  return (
    <div className={`${styles.bubbleWrapper} ${isUser ? styles.user : styles.bot}`}>
      <div className={styles.bubble}>
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </div>
  );
}