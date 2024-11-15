<script setup lang="ts">
// import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { nextTick, provide } from 'vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, isDark: darkTheme } = useData()

// const enableTransitions = () =>
//   'startViewTransition' in document &&
//   window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  // console.log('toggle-appearance', x, y)
  //1731656171896
  // const lastSwitch = window.localStorage.getItem('theme-switch')
  const lastSwitch = 1731656171896
  if (lastSwitch !== null && !isNaN(+lastSwitch)) {
    const lastSwitchTime = +lastSwitch

    // if (Date.now() - lastSwitchTime > 3 * 60 * 1000) {
    //   if (document.documentElement.classList.contains('-animated'))
    //     document.documentElement.classList.remove('-animated')
    // } else {
      document.documentElement.classList.add('-animated')
    // }
  }

  if (document.startViewTransition !== undefined)
        await document.startViewTransition(async () => {
            darkTheme.value = !darkTheme.value
            await nextTick()
        }).ready
})
const onClick = async () => {
  // document.documentElement.classList.add('-animated')
  // if (document.startViewTransition !== undefined)
  //   await document.startViewTransition(async () => {
  //     // darkTheme.value = !darkTheme.value
  //     await nextTick()
  //   }).ready
}
</script>

<template>
  <!-- <link rel="preload" as="image" href="/assets/shigure-ui.webp" fetchpriority="low"> -->
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <div class="i-line-md-bell-loop" />



    <ul>
      <li><a href="/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
  </div>
  <div v-else>
    <!-- <a href="/">Home</a> -->
    <DefaultTheme.Layout>

      <template #doc-top>
        <!-- <div class="h-[220px] top-0 left-0 opacity-25 dark:opacity-[.55] pointer-events-none"> -->
        <div
          class="absolute flex flex-col z-[40] w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden h-[220px] top-0 left-0 opacity-25 dark:opacity-[.55] pointer-events-none">
          <div class="jumbo absolute opacity-60 -animated" />
          <!-- </div> -->
        </div>
        <button @click="onClick">Click</button>
        <!-- <div id="box" class="absolute top-10 left-10 w-5 h-5 bg-slate-50" /> -->
        <!-- <Content /> -->
      </template>
    </DefaultTheme.Layout>
  </div>
</template>



<!-- <style scoped> -->
<style>
:root {
  --switch-duration: 1.75s;
  --switch-name: scale;
}

.-animated {
  --switch-duration: 1s;
  --switch-name: scale-fast;
}

::view-transition-group(root) {
  animation-timing-function: var(--expo-in);
  /* animation-timing-function: linear; */
  z-index: 100;
}

::view-transition-new(root) {
  mask: url('/assets/shigure-ui.webp') center / 0 no-repeat;
  animation: var(--switch-name) var(--switch-duration);
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: var(--switch-name) var(--switch-duration);

}

@keyframes scale {
  0% {
    mask-size: 0;
  }

  10% {
    mask-size: 50vmax;
  }

  90% {
    mask-size: 50vmax;
  }

  100% {
    mask-size: 2000vmax;
  }
}

@keyframes scale-fast {
  0% {
    mask-size: 0;
  }

  10% {
    mask-size: 50vmax;
  }

  80% {
    mask-size: 50vmax;
  }

  100% {
    mask-size: 2000vmax;
  }
}

/* 
:root::view-transition-old(*),
:root::view-transition-new(*) {
  position: absolute;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: auto;

  animation-duration: inherit;
  animation-fill-mode: inherit;
  animation-delay: inherit;
}

@keyframes -ua-mix-blend-mode-plus-lighter {
  from {
    mix-blend-mode: plus-lighter;
  }
  to {
    mix-blend-mode: plus-lighter;
  }
}

@keyframes -ua-view-transition-fade-in {
  from {
    opacity: 0;
  }
} */

@keyframes jumbo {
  from {
    background-position: 50% 50%, 50% 50%;
  }

  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.jumbo {
  --stripes: repeating-linear-gradient(100deg,
      #fff 0%,
      #fff 7%,
      transparent 10%,
      transparent 12%,
      #fff 16%);
  --stripesDark: repeating-linear-gradient(100deg,
      #000 0%,
      #000 7%,
      transparent 10%,
      transparent 12%,
      #000 16%);
  --rainbow: repeating-linear-gradient(100deg,
      #60a5fa 10%,
      #e879f9 16%,
      #5eead4 22%,
      #60a5fa 30%);

  contain: strict;
  contain-intrinsic-size: 100vw 40vh;

  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;

  height: inherit;

  -webkit-transform: translateZ(0);
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;

  filter: invert(100%);
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;

}

.jumbo::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  mix-blend-mode: difference;
}

.-animate.jumbo::after {
  animation: jumbo 90s linear infinite;
}

.-static.jumbo::after {
  animation: unset !important;
}

.dark .jumbo {
  background-image: var(--stripesDark), var(--rainbow);
  filter: opacity(50%) saturate(200%);
}

.dark .jumbo::after {
  background-image: var(--stripesDark), var(--rainbow);
}
</style>
