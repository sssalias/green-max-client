export const queryKeys = {
  account: {
    all: () => ['/account'] as const,
    byChatId: (chatId: string) => ['/account', chatId] as const,
  },
  avatar: {
    byChatId: (chatId: string) => ['/avatar', chatId] as const,
  },
  chats: {
    all: () => ['/chats'] as const,
  },
  chatHistory: {
    all: () => ['/chat-history'] as const,
    byChatId: (chatId: string) => ['/chat-history', chatId] as const,
  },
  notifications: {
    receive: () => ['/receive-notification'] as const,
  },
  sendMessage: (chatId: string, message: string) =>
    ['/send-message', chatId, message] as const,
} as const;
