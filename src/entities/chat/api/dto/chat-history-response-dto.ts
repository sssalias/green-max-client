export type ChatHistoryResponseDto = {
  senderId: string;
  textMessage: string;
  idMessage: string;
  timestamp: number;
  type: 'incoming' | 'outgoing';
};
