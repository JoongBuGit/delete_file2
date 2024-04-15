'use client'

import React, { useState } from 'react'
import LeftSidebar from './components/Lsidebar'
import ChatArea from './components/chatArea'
import RightSidebar from './components/Rsidebar'

interface Message {
  id: number
  text: string
  sender: string
  name: string
  profileImg: string
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '메시지1',
      sender: 'user',
      name: '나',
      profileImg: 'https://via.placeholder.com/48',
    },
    {
      id: 2,
      text: '메시지2',
      sender: 'assistant',
      name: '상대방1',
      profileImg: 'https://via.placeholder.com/48',
    },
  ])
  const [input, setInput] = useState<string>('')
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true)

  const sendMessage = (text: string) => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: 'user',
        name: 'You',
        profileImg: 'https://via.placeholder.com/48',
      }
      setMessages([...messages, newMessage])
      setInput('')
    }
  }

  const sendMedia = (file: File) => {
    // handle sending a media file
    const newMessage: Message = {
      id: messages.length + 1,
      text: '',
      sender: 'user',
      name: 'You',
      profileImg: 'https://via.placeholder.com/48',
      imageUrl: URL.createObjectURL(file),
    }
    setMessages([...messages, newMessage])
  }

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id))
  }

  const handleLeaveRoom = (room: string) => {
    console.log(`Leaving room: ${room}`)
  }

  const uploadMedia = (file: File) => {
    const newMessage = {
      id: messages.length + 1,
      text: file.name,
      sender: 'user',
      name: 'You',
      profileImg: 'https://via.placeholder.com/48',
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="bg-gray-100 h-screen flex max-w-7xl mx-auto">
      <LeftSidebar handleLeaveRoom={handleLeaveRoom} />
      <ChatArea
        messages={messages}
        sendMessage={sendMessage}
        sendMedia={sendMedia}
        input={input}
        setInput={setInput}
        isInitialLoad={isInitialLoad}
        deleteMessage={deleteMessage}
      />
      <RightSidebar />
    </div>
  )
}

export default ChatPage
