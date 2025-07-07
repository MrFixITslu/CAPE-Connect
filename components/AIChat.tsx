import React, { useState, useRef, useEffect } from 'react';
import { getAIExplanation } from '../services/geminiService';
import { SparklesIcon } from './Icons';
import type { Message } from '../types';

interface AIChatProps {
  aiContext: string;
}

const AIChat: React.FC<AIChatProps> = ({ aiContext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'initial', text: `Hello! I'm your learning assistant. Ask me anything about your studies!`, sender: 'ai' }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { id: Date.now().toString(), text: userInput, sender: 'user' }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const aiResponse = await getAIExplanation(userInput, aiContext);
      setMessages([...newMessages, { id: (Date.now() + 1).toString(), text: aiResponse, sender: 'ai' }]);
    } catch (error) {
      setMessages([...newMessages, { id: (Date.now() + 1).toString(), text: "Sorry, I'm having trouble connecting. Please try again.", sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-teal-500 text-white rounded-full p-4 shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-transform transform hover:scale-110"
          aria-label="Toggle AI Chat"
        >
          <SparklesIcon className="w-8 h-8" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[70vh] max-h-[600px] z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right transform scale-100">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
            <SparklesIcon className="w-6 h-6 text-teal-500" />
            <h2 className="ml-2 text-lg font-bold text-gray-800 dark:text-white">AI Learning Assistant</h2>
          </div>
          <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs md:max-w-sm lg:max-w-md px-4 py-2 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-teal-500 text-white rounded-br-none'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm break-words">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-2xl p-2 rounded-bl-none">
                        <div className="flex items-center justify-center space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about a concept..."
                className="w-full pl-4 pr-12 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !userInput.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-500 text-white rounded-full p-2 hover:bg-teal-600 disabled:bg-gray-400 transition-colors"
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;