import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  presets: [
    presetUno(),
    presetAttributify({
      /* preset options */
    }),
    presetIcons(),
    presetDaisy(),
  ],
});
