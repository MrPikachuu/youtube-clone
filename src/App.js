import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, SearchBar} from './components'
// 上面这个从
import { logo } from "./utils/constants";

const App = () => (
  <div>
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        {/* 创建了一个使用 MUI 的 Box 组件，并将其背景颜色设置为黑色。
        在这个代码片段中，<Box> 标签通过 sx 属性传递了一个 JavaScript
         对象，对象中包含了一个 backgroundColor 属性，值为 #000，表示黑色。
         这个 JavaScript 对象使用了 MUI 的特殊语法，称为 Sx Props，允许在 
         JavaScript 中编写 CSS 样式。 */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id " element={<VideoDetail />} />
          <Route path="/channel/:id " element={<ChannelDetail />} />
          <Route path="/search/:searchTerm " element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </div>
);


export default App