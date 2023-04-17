import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar, Videos} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

// feed就是主页
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  }, [selectedCategory]);


  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
          // 就是小屏幕的时候 是column 中屏幕以上的时候是row 这个是所有的视频
        } }}  >
        
          <Box sx = {{height : {sx:'auto', md:'92vh'
        // 在 sx 断点下（默认情况下为“extra-small”），height 取值为 "auto"，即高度自适应。
        // 在 md 断点下（中等屏幕尺寸），height 取值为 "92vh"，即高度为视口高度的 92%。
        },borderRight: '1px solid #3d3d3d', px:{sx:0, md:2}}}>
          <Sidebar selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory}
          />

          <Typography className = "copyright" 
          variant = "bidy2" sx = {{mt:1.5,
          color:'#fff'}}>
            Copyright 2022 SNOWYE
          </Typography>
          {/* Typography 是 mui/material 组件库中的一个用于显示文本的组件，它提供了一种简单的方式来控制文本的样式和排版。
Typography 组件可以用于显示不同级别的标题、正文文本、按钮文本等，通过设置 variant 属性来指定文本的类型。例如： */}

          </Box>

          <Box p = {2} sx = {{overflowY : 'auto', height: '90vh' ,flex : 2}}>
            <Typography variant = "h4" fontWeight = "bold" mb = {2} sx = {{color: 'white'}}>
              {selectedCategory} <span style = {{color:"F31503"}}>videos</span>
            </Typography>

            <Videos videos = {videos}/>
            {/* videos prop 先pass in 空列表
            这里开始传props了 传videos */}


          </Box>
      


    </Stack>
  );
};

export default Feed;

// 在 Stack 组件的 sx 对象中，flexDirection 属性是将 Stack 内的可伸缩项目排列方向的控制属性。
// 在这里，它针对小屏幕设备设置为 column，对于中等和更大的屏幕则设置为 row。这意味着当 Stack 在小屏幕
// 下显示时，其子组件将以列方式显示，而在中等和更大的屏幕下则以行方式显示。
// 由于 Box 组件是 Stack 组件的第一个子组件，所以在 Stack 以行的方式显示时，Box 组件将显示在左侧，
// 这正是你所看到的。
