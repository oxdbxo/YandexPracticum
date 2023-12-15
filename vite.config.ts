import handlebars from 'vite-plugin-handlebars';

export default {
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
  },
  plugins: [handlebars()],
}
