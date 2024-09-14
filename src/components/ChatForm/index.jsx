import Image from "next/image"

import icon from './send.png'

import styles from './chat.module.css'

export const ChatForm = ({ input, handleInputChange, handleSubmit }) => {
    return (<form className={styles.form} onSubmit={handleSubmit}>
        <input 
            className={styles.input} 
            placeholder="Digite sua mensagem..."
            required
            value={input}
            onChange={handleInputChange}
        />
        <button  className={styles.btn}>
            <Image src={icon} alt="" />
        </button>
    </form>)
}