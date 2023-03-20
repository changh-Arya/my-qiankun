<template>
  <div>
    <div>
      <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="order">
          <template #icon>
            <mail-outlined />
          </template>
          <router-link to="/">普通订单</router-link>
        </a-menu-item>
        <a-menu-item key="sale">
          <template #icon>
            <appstore-outlined />
          </template>
          <router-link to="/sale">销售订单</router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
const current = ref<string[]>(['order']);
</script>

<style lang='less' scoped></style>