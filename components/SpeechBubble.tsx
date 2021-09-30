import { FC } from "react"

const SpeechBubble:FC = ({children}) => {
  return (
    <div className="speech-bubble-container">
      <div className="speech-bubble">
        {children}
      </div>
    </div>
  )
}

export default SpeechBubble;
