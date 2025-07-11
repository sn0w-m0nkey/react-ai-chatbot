import { useState } from 'react';
import { Assistant } from './assistants/googleai'
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls'
import styles from './App.module.css'

function App() {
  const assistant = new Assistant()
  const [messages, setMessages] = useState([])

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  async function handleContentSend(content) {
    addMessage({ content, role: 'user' })

    try {
      const result = await assistant.chat(content)
      addMessage({ content: result, role: 'assistant' })
    } catch (error) {
      addMessage({ content: 'Sorry, we encountered an error, please try again', role: 'system' })
    }
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
