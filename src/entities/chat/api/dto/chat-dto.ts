export type ChatDto = {
  chatId: string;
  name: string;
  type: 'user' | 'group' | 'channel' | 'bot';
  phoneNumber: number;
};
