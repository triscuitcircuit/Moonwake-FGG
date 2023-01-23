import { defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) =>
{
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env':{}
    },
    plugins: [react()],
  }
});
