import { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handleSend = (data) => {
        console.log('Gönderilen:', data);
        setOpen(false);
    };

    return (
        <MessageContext.Provider value={{ message, setMessage, handleSend, open, setOpen }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => useContext(MessageContext);