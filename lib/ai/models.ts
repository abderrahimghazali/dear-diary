export const DEFAULT_CHAT_MODEL: string = "diary-chat";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "diary-chat",
    name: "Diary Companion",
    description:
      "Empathetic AI companion for personal journaling and reflection",
  },
  {
    id: "diary-reasoning",
    name: "Diary Insights",
    description:
      "Deep reasoning for pattern analysis and emotional insights in your journal",
  },
];
