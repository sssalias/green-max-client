export type ReceiveNotificationResponseDto = {
  receiptId: string;
  body: {
    typeWebHook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      chatName: string;
      chatType: string;
      sender: string;
      senderName: string;
      senderType: string;
      senderContactName: string;
      senderPhoneNumber: number;
    };
    messageData: {
      typeMessage: 'textMessage' | 'buttonsMessage' | string;
      textMessageData: {
        textMessage: string;
        forwardingScore: number;
        isForwarded: boolean;
      };
    };
  };
};
