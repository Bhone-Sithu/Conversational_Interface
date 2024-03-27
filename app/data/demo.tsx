import { LeadStatus } from "../models/LeadStatusEnum";
const fakeData = [
  {
    id: 1,
    name: "John Smith",
    position: "Senior UI/UX Designer",
    campaign: "UI/UX designers in Bangkok",
    receiverImage: "/mock-images/appleAnimoji.jpg",
    senderImage: "/mock-images/BST(old).jpeg",
    lastTime: new Date("2024-03-23T18:25:43.511Z"),
    leadStatus: LeadStatus.QL,
    messageList: [
      {
        message: "Hello How are you",
        time: new Date("2024-03-23T18:25:43.511Z"),
        destination: "from",
      },
      {
        message: "Hello John",
        time: new Date("2024-03-23T18:25:43.511Z"),
        destination: "to",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    position: "Senior Developer",
    campaign: "Developers in New York",
    receiverImage: "/mock-images/appleAnimoji.jpg",
    senderImage: "/mock-images/BST(old).jpeg",
    lastTime: new Date("2024-03-23T18:25:43.511Z"),
    leadStatus: LeadStatus.I,
    messageList: [
      {
        message: "Hey there!",
        time: new Date("2024-03-23T09:25:43.511Z"),
        destination: "from",
      },
      {
        message: "Hi Jane!",
        time: new Date("2024-03-23T12:25:43.511Z"),
        destination: "to",
      },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Product Manager",
    campaign: "Product Managers in San Francisco",
    receiverImage: "/mock-images/appleAnimoji.jpg",
    senderImage: "/mock-images/BST(old).jpeg",
    lastTime: new Date("2024-03-23T18:25:43.511Z"),
    leadStatus: LeadStatus.N,
    messageList: [
      {
        message: "Hello Alice!",
        time: new Date("2024-03-23T08:25:43.511Z"),
        destination: "from",
      },
      {
        message: "Hi there!",
        time: new Date("2024-03-23T13:25:43.511Z"),
        destination: "to",
      },
    ],
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Software Engineer",
    campaign: "Software Engineers in Silicon Valley",
    receiverImage: "/mock-images/appleAnimoji.jpg",
    senderImage: "/mock-images/BST(old).jpeg",
    lastTime: new Date("2024-03-23T18:25:43.511Z"),
    leadStatus: LeadStatus.R,
    messageList: [
      {
        message: "Hello Michael!",
        time: new Date("2024-03-23T07:25:43.511Z"),
        destination: "from",
      },
      {
        message: "Hi there!",
        time: new Date("2024-03-23T14:25:43.511Z"),
        destination: "to",
      },
    ],
  },
  {
    id: 5,
    name: "Emily Clark",
    position: "Marketing Specialist",
    campaign: "Marketing Professionals in Chicago",
    receiverImage: "/mock-images/appleAnimoji.jpg",
    senderImage: "/mock-images/BST(old).jpeg",
    lastTime: new Date("2024-03-23T18:25:43.511Z"),
    leadStatus: LeadStatus.I,
    messageList: [
      {
        message: "Hello Emily!",
        time: new Date("2024-03-23T06:25:43.511Z"),
        destination: "from",
      },
      {
        message: "Hi there!",
        time: new Date("2024-03-23T15:25:43.511Z"),
        destination: "to",
      },
    ],
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Project Manager",
    campaign: "Project Managers in Los Angeles",
    receiverImage: "/mock-images/appleAnimoji.jpg",
    senderImage: "/mock-images/BST(old).jpeg",
    lastTime: new Date("2024-03-23T18:25:43.511Z"),
    leadStatus: LeadStatus.QL,
    messageList: [
      {
        message: "Hello David!",
        time: new Date("2024-03-23T05:25:43.511Z"),
        destination: "from",
      },
      {
        message: "Hi there!",
        time: new Date("2024-03-23T16:25:43.511Z"),
        destination: "to",
      },
    ],
  },
];
export default fakeData;
