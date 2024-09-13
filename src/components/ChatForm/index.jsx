import Image from "next/image"

import icon from './send.png'

import styles from './chat.module.css'

export const ChatForm = () => {
    return (<form className={styles.form}>
        <input 
            className={styles.input} 
            placeholder="Digite sua mensagem..."
            required
        />
        <button  className={styles.btn}>
            <Image src={icon} alt="" />
        </button>
    </form>)
}