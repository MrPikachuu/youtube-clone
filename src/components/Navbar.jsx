import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import { logo } from "../utils/constants";

// 就是顶上带youtube标签和搜索框的bar
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <div><img src={logo} alt="logo" height={45} /></div>
    </Link>
    <SearchBar />

  </Stack>
);

export default Navbar;
// 在 React 中，当您的组件只返回单个 JSX 元素时，您可以使用圆括号 () 来替换花括号 {} 并省略 return 语句。这被称为隐式返回语法。
// 在您提供的代码中，Navbar 组件只返回一个 <Stack> 组件，没有其他额外的内容。因此，您可以使用圆括号 () 并省略 return 语句来隐式返回 <Stack> 组件，例如：
