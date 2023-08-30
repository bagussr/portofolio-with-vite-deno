// @ts-nocheck
import { defineConfig } from 'npm:vite@^4.3.9';
import react from 'npm:@vitejs/plugin-react@^4.0.0';

import 'npm:react@^18.2.0';
import 'npm:react-dom@^18.2.0/client';
import 'npm:react-router-dom@^6.15.0';
import 'npm:@chakra-ui/react@^2.8.0';
import 'npm:@emotion/react@^11.7.1';
import 'npm:@emotion/styled@^11.7.1';
import 'npm:framer-motion@^10.16.0';
import 'npm:react-icons@^4.3.1';

import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      input: {
        App: resolve(__dirname, 'src/App.tsx'),
        About: resolve(__dirname, 'src/page/About.tsx'),
        Home: resolve(__dirname, 'src/page/Home.tsx'),
        CustomBox: resolve(__dirname, 'src/components/CustomBox.tsx'),
        NavBar: resolve(__dirname, 'src/components/header/NavBar.tsx'),
        SideBar: resolve(__dirname, 'src/components/header/SideBar.tsx'),
        EducationSection: resolve(
          __dirname,
          'src/components/detailAbout/EducationSection.tsx'
        ),
        ExperienceSection: resolve(
          __dirname,
          'src/components/detailAbout/ExperienceSeciton.tsx'
        ),
        InterestSection: resolve(
          __dirname,
          'src/components/detailAbout/InterestSection.tsx'
        ),
        TechStackSection: resolve(
          __dirname,
          'src/components/detailAbout/TechStackSection.tsx'
        ),
        PersonalInformationSection: resolve(
          __dirname,
          'src/components/detailAbout/PersonalInformation.tsx'
        ),
        FloatingButtonLink: resolve(
          __dirname,
          'src/components/button/FloatingButtonLink.tsx'
        ),
        InterestButton: resolve(
          __dirname,
          'src/components/button/InteresButton.tsx'
        ),
      },
    },
  },
  server: {
    port: 3000,
  },
});
