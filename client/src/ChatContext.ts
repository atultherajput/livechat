import React, { createContext, useContext } from 'react';
import { SocketService } from './SocketService';

export const ChatContext: React.Context<SocketService> = createContext(new SocketService());
export const useChat = () => useContext(ChatContext);