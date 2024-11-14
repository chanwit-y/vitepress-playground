<script setup lang="ts">
import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <div i-line-md-bell-loop />

    <div class="card bg-primary text-primary-content w-96">
      <div class="card-body">
        <h2 class="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn">Buy Now</button>
        </div>
      </div>
    </div>

    <span text-red>Hi</span>
    <ul>
      <li><a href="/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <DefaultTheme.Layout>
      <Content />
    </DefaultTheme.Layout>
  </div>
</template>
