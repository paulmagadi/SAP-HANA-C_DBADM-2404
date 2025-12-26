import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev/config/
export default defineConfig({
  base: '/SAP-HANA-C_DBADM-2404/', // Set base path for GitHub Pages deployment
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
        
      },
    }),
    tailwindcss(),
  ],
})
