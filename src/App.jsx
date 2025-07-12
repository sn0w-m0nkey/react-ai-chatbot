import { useState } from 'react';
import { Assistant } from './assistants/googleai'
//import { Assistant } from './assistants/openai'
import { Loader } from './components/Loader/Loader'
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls'
import styles from './App.module.css'

function App() {
  const assistant = new Assistant()
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  async function handleContentSend(content) {
    addMessage({ content, role: 'user' })
    setIsLoading(true)

    try {
      const result = await assistant.chat(content, messages)
      addMessage({ content: result, role: 'assistant' })
    } catch (error) {
      addMessage({ content: `Sorry, we encountered an error, please try again: ${error}`, role: 'system' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className={styles.App}>
        {isLoading && <Loader />}
        <div className={styles.Header}></div>
        <header className={styles.Header}>
          <img src='/chat-bot.png' className={styles.Logo} />
          <h2 className={styles.Title}>AI Chatbot</h2>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
        <Controls onSend={handleContentSend} />
      </div>
    </>
  )
}

export default App
