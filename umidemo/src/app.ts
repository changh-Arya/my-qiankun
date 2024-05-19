import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
function render() {
  ReactDOM.render(<IndexPage />, document.getElementById('root'));
}
// 独立运行时，直接挂载应用
// if (!window.__POWERED_BY_QIANKUN__) {
render();
// }
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('UmiApp bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('UmiApp mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('UmiApp unmount', props);
  },
};