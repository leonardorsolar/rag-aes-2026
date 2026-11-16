import "dotenv/config";

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY ?? "",
  qdrantUrl: process.env.QDRANT_URL ?? "http://localhost:6333",
  qdrantCollection: process.env.QDRANT_COLLECTION ?? "documents",
  uploadDir: process.env.UPLOAD_DIR ?? "./uploads",
  port: Number(process.env.PORT ?? 3000),
  maxFileSize: MAX_FILE_SIZE,
};
