import { useState } from 'react';
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls'
import styles from './App.module.css';

function App() {

  const [messages, setMessages] = useState(MESSAGES)

  return (
    <>
      <div className={styles.Header}></div>
      <header className={styles.Header}>
        <img src='/chat-bot.png' className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
        <Controls />
      </header>
    </>
  )
}

const MESSAGES = [
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus voluptatibus ipsam illo eligendi obcaecati alias magni voluptate, corrupti adipisci quae esse fugiat nesciunt suscipit sunt laboriosam fuga aperiam sed. Sint?",
  },
];

export default App
