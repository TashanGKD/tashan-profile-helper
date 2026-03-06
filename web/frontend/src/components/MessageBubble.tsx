import ReactMarkdown from "react-markdown";
import { UserAvatar, RobotAvatar } from "./LoadingDots";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === "user";
  return (
    <div
      className={`message-row ${isUser ? "message-row-user" : "message-row-assistant"}`}
      data-role={role}
    >
      {isUser ? null : <RobotAvatar />}
      <div
        className={`message-bubble ${isUser ? "user" : "assistant"}`}
      >
        {isUser ? (
          <p className="message-text">{content}</p>
        ) : (
          <div className="message-markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
      {isUser ? <UserAvatar /> : null}
    </div>
  );
}
