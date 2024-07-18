<template>
  <div>home</div>
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

<route lang="yaml">
meta:
  layout: default
</route>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
