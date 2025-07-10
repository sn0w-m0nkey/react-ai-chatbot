import styles from './App.module.css';

function App() {

  return (
    <>
      <div className={styles.Header}></div>
      <header className={styles.Header}>
        <img src='/chat-bot.png' className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
    </>
  )
}

export default App
