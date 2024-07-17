<template>
  <h1>about</h1>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,
    onNeedRefresh() {
      console.log('有文件需更新了')
    },
    onRegisteredSW(url, registration) {
      console.log(url, registration)
      setInterval(() => {
        registration && registration.update()
      }, 5000)
    }
  })
})
</script>
