import styles from './chat-feed.module.css';
import { Chat, useGetChats } from '@/entities/chat';
import type { ChatDto } from '@/entities/chat/api/dto';
import { UiAvatar } from '@/shared/ui';
import { useChatId } from '@/features/chat-messages/lib';
import { useNavigate } from 'react-router-dom';

export default function ChatFeed() {
  const { data: chats } = useGetChats();
  const selectedChatId = useChatId();

  const navigate = useNavigate();

  return (
    <aside className={styles.chatFeed}>
      <div className={styles.chatFeedWrapper}>
        {chats?.map((chat: ChatDto) => (
          <Chat
            key={chat.chatId}
            chat={chat}
            avatar={<UiAvatar />}
            active={chat.chatId === selectedChatId}
            onClick={() => navigate(`/chat?id=${chat.chatId}`)}
          />
        ))}
      </div>
    </aside>
  );
}
