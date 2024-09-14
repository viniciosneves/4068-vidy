'use client';

import ChatBubble from '../ChatBubble';
import { ChatForm } from '../ChatForm';
import { ChatHeader } from '../ChatHeader';
import { Loader } from '../Loader';
import StopButton from '../StopButton';
import styles from './container.module.css';
import { useChat } from 'ai/react';

export const ChatContainer = () => {

    const { messages, setMessages, input, handleInputChange, handleSubmit, isLoading, stop, reload } = useChat()
    const handleDelete = (id) => {
        setMessages(messages.filter(message => message.id !== id))
    }

    return (
        <section className={styles.container}>
            <ChatHeader />
            <div className={styles.chat}>

                {messages.map((msg, index) => (
                    <ChatBubble key={index} message={msg.content} onRemove={() => handleDelete(msg.id)} isUser={msg.role === 'user'} />
                ))}

            </div>
            {isLoading && <div>
                <Loader />
                <StopButton onClick={stop} />
            </div>}
            <button onClick={reload} disabled={isLoading}>
                Gerar outra resposta
            </button>

            <ChatForm
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </section>
    );
};