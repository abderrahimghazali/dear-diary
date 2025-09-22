import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { createOllama } from "ollama-ai-provider-v2";
import { isTestEnvironment } from "../constants";

const ollama = createOllama({
  baseURL: process.env.OLLAMA_BASE_URL || "http://localhost:11434/api",
});

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "diary-chat": chatModel,
          "diary-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : customProvider({
      languageModels: {
        "diary-chat": ollama("mistral:7b"),
        "diary-reasoning": wrapLanguageModel({
          model: ollama("mistral:7b"),
          middleware: extractReasoningMiddleware({ tagName: "think" }),
        }),
        "title-model": ollama("mistral:7b"),
        "artifact-model": ollama("mistral:7b"),
      },
    });
