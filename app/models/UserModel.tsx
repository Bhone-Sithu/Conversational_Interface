import { LeadStatus } from "./LeadStatusEnum";

export default interface User {
  id: number;
  name: string;
  position: string;
  campaign: string;
  receiverImage: string;
  senderImage: string;
  leadStatus: LeadStatus;
  messageList: Array<Message>;
  lastTime: Date;
}
export interface Message {
  message: string;
  time: Date;
  isAiAssited: Boolean;
  sentVia: string;
  destination: string;
}
