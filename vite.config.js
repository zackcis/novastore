import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This plugin lets Vite compile JSX and refresh React while we edit files.
export default defineConfig({ plugins: [react()] });
