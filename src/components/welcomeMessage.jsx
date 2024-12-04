import styles from "./welcomeMessage.module.css"
const  Message=({todoItems})=>{
  return todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
}

export default Message;