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
interface Message {
  message: string;
  time: Date;
  destination: string;
}
