import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'hokihd',
  e2e: {
    baseUrl: 'http://127.0.0.1:5173/',
  },
});
