import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun"

export default defineConfig({
  plugins: [
    vue(),
    qiankun('Vue3App', {
      useDevMode: true
    })
  ],
  server:{
    host: '127.0.0.1',
    port: 8088,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
