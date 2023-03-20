// 此时我们还没有微应用，所以 apps 为空
const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "VueApp",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/vue",
  },
  {
    name: "ReactApp",
    entry: "//localhost:8000",
    container: "#container",
    activeRule: "/react",
  },
  {
    name: "Vue3App",
    entry: "//localhost:8088",
    container: "#container",
    activeRule: "/vue3",
  },
  {
    name: "UmiApp",
    entry: "//localhost:8800",
    container: "#container",
    activeRule: "/umi",
  },
];
// 一个进度条插件
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import { message } from "element-ui";
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";

/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app) => {
    // 加载微应用前，加载进度条
    // NProgress.start();
    console.log("before load", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app) => {
    // 加载微应用前，进度条加载完成
    // NProgress.done();
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    message.error("微应用加载失败，请检查应用是否可运行");
  }
});

// 导出 qiankun 的启动函数
export default start;