export interface Message {
  body: string;
  id?: number;
  created_at?: Date;
}

export interface SocketMessage {
  action: string;
  message: Message;
}
