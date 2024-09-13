import ChatBubble from '../ChatBubble';
import { ChatForm } from '../ChatForm';
import { ChatHeader } from '../ChatHeader';
import styles from './container.module.css';

export const ChatContainer = () => {
    const messages = [
        { message: "Estou aqui para ajudar na escolha do seu vídeo.", isUser: false },
        { message: "Para começar, qual sua faixa etária?", isUser: false },
        { message: "25", isUser: true },
        {
            message: `
Escolha um dos temas listados abaixo:
- Saúde
- Viagem
- Economia
- Alimentação
- Esporte
- Humor
- Programação
- Política
- Religião
- Entretenimento      
            `,
            isUser: false
        },
        {
            message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatibus iste accusantium modi? Sed, mollitia beatae similique neque vel sit libero ipsa ex natus ullam! Suscipit sit iure ex vel.",
            isUser: true
        }
    ];

    return (
        <section className={styles.container}>
            <ChatHeader />
            <div className={styles.chat}>
                
                {messages.map((msg, index) => (
                    <ChatBubble key={index} message={msg.message} isUser={msg.isUser} />
                ))}
            </div>
            <ChatForm />
        </section>
    );
};