import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar'
import { Loader } from './components/Loader/Loader'
import { Chat } from './components/Chat/Chat'
import { Controls } from './components/Controls/Controls'
import { Assistant } from './components/Assistant/Assistant'
import { Theme } from './components/Theme/Theme'
import styles from './App.module.css'

let assistant

function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)

  function updateLastMessageContent(content) {
    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? { ...message, content: `${message.content}${content}` }
          : message
      ))
  }

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  async function handleContentSend(content) {
    addMessage({ content, role: 'user' })
    setIsLoading(true)

    try {
      const result = await assistant.chatStream(
        content,
        messages.filter(({ role }) => role !== 'system'))

      let isFirstChunk = false
      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true
          addMessage({ content: '', role: 'assistant' })
          setIsLoading(false)
          setIsStreaming(true)
        }

        updateLastMessageContent(chunk)
      }

      setIsStreaming(false)
    } catch (error) {
      addMessage({
        content:
          error?.message ??
          `Sorry, we encountered an error, please try again.`,
        role: 'system'
      })
      setIsLoading(false)
      setIsStreaming(false)
    }
  }

  function handleAssistantChange(newAssistant) {
    assistant = newAssistant
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <div className={styles.Header}></div>
      <header className={styles.Header}>
        <img src='/chat-bot.png' className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.Content}>
        <Sidebar />
        <main className={styles.Main}>
          <div className={styles.ChatContainer}>
            <Chat messages={messages} />
          </div>
          <Controls
            isDisabled={isLoading || isStreaming}
            onSend={handleContentSend} />
          <div className={styles.Configuration}>
            <Assistant onAssistantChange={handleAssistantChange} />
            <Theme />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
