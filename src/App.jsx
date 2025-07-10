import { useState } from 'react';
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls'
import styles from './App.module.css'

function App() {
  const [messages, setMessages] = useState([])

  function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, { content, role: 'user' }])
  }

  return (
    <>
      <div className={styles.Header}></div>
      <header className={styles.Header}>
        <img src='/chat-bot.png' className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
        <Controls onSend={handleContentSend} />
      </header>
    </>
  )
}

export default App
