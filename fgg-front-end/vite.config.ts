import { defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import loadVersion from 'vite-plugin-package-version';

export default defineConfig(({ command, mode }) =>
{
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      "base":"/Moonwake-FGG/",
      'process': "import.meta",
      'process.env':"import.meta.env",
      'process.versions': "import.meta.versions"
    },
    plugins: [react()],
  }
});
