'use client';

import ChatBubble from '../ChatBubble';
import { ChatForm } from '../ChatForm';
import { ChatHeader } from '../ChatHeader';
import styles from './container.module.css';
import { useChat } from 'ai/react';

export const ChatContainer = () => {

    const { messages, input, handleInputChange, handleSubmit } = useChat()

    return (
        <section className={styles.container}>
            <ChatHeader />
            <div className={styles.chat}>
                
                {messages.map((msg, index) => (
                    <ChatBubble key={index} message={msg.content} isUser={msg.role === 'user'} />
                ))}
            </div>
            <ChatForm
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </section>
    );
};