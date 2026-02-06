import { Paperclip, SendHorizontal, Mic } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import AiMultiModels from './AiMultiModels'; 

function ChatInputBox() {
    const [message, setMessage] = useState('');
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; 
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
        }
    }, [message]);

    return (
    <div className='relative min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors duration-300'> 

        {/* Page Content Placeholder */}
        <div className='h-[75vh] overflow-hidden pb-24still'>
             <AiMultiModels />
        </div>

        {/* Fixed Chat Input */}
        <div className='fixed bottom-0 left-0 right-0 w-full flex justify-center px-4 pb-6 z-40'>
            <div className='w-full border border-gray-200 dark:border-zinc-700 rounded-3xl shadow-xl max-w-2xl bg-white dark:bg-zinc-800 overflow-hidden'>
                
                <div className='flex items-end px-3 py-2 gap-2'>
                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 rounded-full shrink-0 mb-1"> 
                        <Paperclip className='h-5 w-5'/>
                    </Button>
                    <textarea 
                        ref={textareaRef} 
                        placeholder='Ask me anything...' 
                        name='chat_message_field' 
                        autoComplete='off' 
                        data-1p-ignore 
                        rows={1} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='no-scrollbar resize-none border-0 flex-1 outline-none px-2 py-3 max-h-48 overflow-y-auto bg-transparent text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500' 
                        style={{ minHeight: '44px' }}/>
                    
                    <div className='flex items-center gap-2 shrink-0 mb-1'>
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 rounded-full">
                            <Mic className='h-5 w-5' />
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`rounded-full transition-all duration-200 ${
                                message.trim() 
                                ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md'
                                : 'text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`} >
                            <SendHorizontal className='h-5 w-5' />
                        </Button>
                    </div>

                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default ChatInputBox