import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {
    qiankunWindow,
    renderWithQiankun,
} from 'vite-plugin-qiankun/dist/helper';
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

let app: any;
function render(props: any) {
    const { container, parentActions } = props;
    app = createApp(App);
    app.use(Antd)
    app.use(router).mount(container instanceof Element
        ? (container.querySelector("#app"))
        : (container)
    );
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({ container: "#app" });
} else {
    renderWithQiankun({
        mount(props) {
            // 每次挂载都重新执行render方法
            render(props)
        },
        bootstrap() {
            console.log("Vue3App正在加载");
        },
        update() {
            console.log("Vue3App正在更新");
        },
        unmount() {
            console.log("Vue3App正在卸载");
            // 卸载时同时卸载子应用实例
            app.unmount();
        }
    });
}

// const app = createApp(App)
// app.use(router);
// app.mount("#app")

