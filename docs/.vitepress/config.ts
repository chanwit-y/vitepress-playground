import UnoCSS from "unocss/vite";
import { defineConfig } from "vitepress";
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    plugins: [UnoCSS()],
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    codeTransformers: [transformerTwoslash()]
  },
  themeConfig: {
    search: {
        provider: 'local'
    },
  }
});
