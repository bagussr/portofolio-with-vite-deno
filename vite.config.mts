import { defineConfig } from 'npm:vite@^4.3.9';
import react from 'npm:@vitejs/plugin-react@^4.0.0';

import 'npm:react@^18.2.0';
import 'npm:react-dom@^18.2.0/client';
import 'npm:react-router-dom@^6.15.0';
import 'npm:@chakra-ui/react@^2.8.0';
import 'npm:@emotion/react@^11.7.1';
import 'npm:@emotion/styled@^11.7.1';
import 'npm:framer-motion@^10.16.0';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
