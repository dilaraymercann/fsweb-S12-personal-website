import { createContext, useContext, useState, useEffect } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [historyOpen, setHistoryOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('messages');
        return saved ? JSON.parse(saved) : [];
    });

    const handleSend = (data) => {
        const newMessage = { ...data, date: new Date().toISOString() };
        const updated = [newMessage, ...messages];
        setMessages(updated);
        localStorage.setItem('messages', JSON.stringify(updated));
        setOpen(false);
    };

    return (
        <MessageContext.Provider value={{ message, setMessage, handleSend, open, setOpen, messages, historyOpen, setHistoryOpen }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => useContext(MessageContext);