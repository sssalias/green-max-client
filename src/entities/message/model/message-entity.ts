export class MessageEntity {
  private constructor(
    public id: string,
    public text: string,
    public type: 'incoming' | 'outgoing',
    public date: Date
  ) {}

  public static create(
    id: string,
    text: string,
    type: 'incoming' | 'outgoing',
    date: Date
  ): MessageEntity {
    return new MessageEntity(id, text, type, date);
  }
}
