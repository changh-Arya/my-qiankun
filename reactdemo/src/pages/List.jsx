import React from 'react'

import { useUser } from '../api/user'
// import MySVG from './globe.svg';
// import mysvg from "../../public/manifest.json"

import image from '../assets/globe.svg';

export default function List() {
  const { data, error, isLoading } = useUser()
  const { enqueueMessage } = useMessage();

  // 模拟动态添加消息
  const handleAddMessage = () => {
    enqueueMessage('这是一条动态添加的消息！');
  };
 if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>
       <button onClick={handleAddMessage}>添加消息</button>
      <h2 class="testText">测试文本</h2>
      {/* <MySVG/> */}
      <img src={image} />
      <div>
        {data?.status}
      </div>
      <Page/>
    </div>
  )
}

// 页面组件

function Page() {
  return <div>
    <Navbar />
    <Content />
  </div>
}

// 子组件

function Navbar() {
  return <div>
    ...
    <Avatar />
  </div>
}

function Content() {
  const { data, isLoading } = useUser()
  if (isLoading) return <Spinner />
  return <h1>Welcome back, {data?.name}</h1>
}

function Avatar() {
  const { data, isLoading } = useUser()
  if (isLoading) return <Spinner />
  return <div>{ data?.ok}</div>
}
function Spinner() {
  return <div>loading</div>
}