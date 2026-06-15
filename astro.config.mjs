// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH 
  || (process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY 
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
      : '/');

// https://astro.build/config
export default defineConfig({
  base: base,
  build: {
    inlineStylesheets: 'always'
  }
});
