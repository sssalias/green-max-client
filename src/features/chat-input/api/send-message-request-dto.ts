export type SendMessageRequestDto = {
  chatId: string;
  message: string;
  typingTime?: number;
  quotedMessageId?: string;
};
