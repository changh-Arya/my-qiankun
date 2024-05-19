import React, { useState } from "react";
import List from "./pages/List";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

const items = [
  {
    label: <Link to="/">商品列表</Link>,
    key: "list",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/category">商品分类</Link>,
    key: "category",
    icon: <AppstoreOutlined />,
  },
];
export default function App() {
  const [current, setCurrent] = useState("list");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <BrowserRouter basename={BASE_NAME}>
      <div>
        <div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<List></List>}></Route>
            <Route path="/category" element={<Category></Category>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
