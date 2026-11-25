import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://devphoton.com',
  // Static site generation: fastest load times, 100 SEO score, 0 server cost,
  // natively deployable on both Vercel and Cloudflare Pages
  output: 'static',
  build: {
    format: 'directory'
  }
});
