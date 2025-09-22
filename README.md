<h1 align="center">Dear Diary</h1>

<p align="center">
    A private, empathetic AI diary companion powered by local Ollama models. Your personal space for thoughts, reflections, and conversations with an AI that truly listens.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#setup"><strong>Setup</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Features

- **🔒 Complete Privacy**: All conversations stay on your local machine
- **🤖 Local AI**: Powered by Ollama with Mistral 7B - no cloud dependencies
- **💝 Empathetic Companion**: AI trained to be a warm, understanding diary companion
- **📖 Conversation History**: Persistent storage of your diary entries and conversations
- **🎨 Beautiful Interface**: Built with Next.js, Tailwind CSS, and shadcn/ui
- **🔐 Secure**: Local PostgreSQL database with authentication
- **⚡ Real-time**: Streaming responses for natural conversation flow

## Setup

Dear Diary uses local AI models through Ollama for complete privacy. No data ever leaves your machine.

### Prerequisites

1. **Docker** - For running PostgreSQL
2. **Ollama** - For local AI models

### Install Ollama and Models

```bash
# Install Ollama (macOS)
curl -fsSL https://ollama.ai/install.sh | sh

# Pull required models
ollama pull mistral:7b
ollama pull nomic-embed-text  # For future vector search features
```

## Running locally

### 1. Start PostgreSQL Database

```bash
docker run -d \
  --name dear-diary-postgres \
  -p 5433:5432 \
  -e POSTGRES_DB=dear_diary \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  postgres:15
```

### 2. Clone and Setup

```bash
git clone <your-repo-url>
cd dear-diary
pnpm install
```

### 3. Environment Configuration

Copy `.env.example` to `.env` and update:

```bash
cp .env.example .env
```

The `.env` should contain:
```env
POSTGRES_URL=postgresql://postgres:password@localhost:5433/dear_diary
OLLAMA_BASE_URL=http://localhost:11434/api
AUTH_SECRET=your_random_secret_here
```

### 4. Run Database Migrations

```bash
pnpm db:migrate
```

### 5. Start the Application

```bash
pnpm install
pnpm dev
```

Your personal diary companion will be running on [localhost:3000](http://localhost:3000)! 🎉

## Privacy & Security

- ✅ All AI processing happens locally via Ollama
- ✅ All data stored locally in PostgreSQL
- ✅ No external API calls for AI inference
- ✅ Complete control over your personal data
