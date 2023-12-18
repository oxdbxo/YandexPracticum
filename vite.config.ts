import handlebars from 'vite-plugin-handlebars';
import stylelint from 'vite-plugin-stylelint';

export default {
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
  },
  plugins: [handlebars(), stylelint()],
}
