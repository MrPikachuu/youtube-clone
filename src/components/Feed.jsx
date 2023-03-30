import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from './Sidebar'
const Feed = () => {
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
          <Sidebar></Sidebar>

          <Typography className = "copyright" 
          variant = "bidy2" sx = {{mt:1.5,
          color:'#fff'}}>
            Copyf
          </Typography>

          </Box>
          <Box p = {2} sx = {{overflowY : 'auto', height: '90vh' ,flex : 2}}>
            <Typography variant = "h4" fontweight = "bold" mb = {2} sx = {{color: 'white'}}>
              New <span style = {{color:"F31503"}}>videos</span>
            </Typography>

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