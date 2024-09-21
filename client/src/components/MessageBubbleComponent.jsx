import React from 'react'

const MessageBubbleComponent = ({message , isUser}) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-xs p-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
      {message}
      </div>
    </div>
  )
}

export default MessageBubbleComponent
