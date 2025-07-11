import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls'
import styles from './App.module.css'

const googleAi = new GoogleGenerativeAI(import.meta.env.VITE_GOGGLE_AI_API_KEY)
const gemini = googleAi.getGenerativeModel({ model: 'gemini-1.5-flash' })
const chat = gemini.startChat({ history: [] })

function App() {
  const [messages, setMessages] = useState([])

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  async function handleContentSend(content) {
    addMessage({ content, role: 'user' })

    try {
      const result = await chat.sendMessage(content)
      addMessage({ content: result.response.text(), role: 'assistant' })
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
