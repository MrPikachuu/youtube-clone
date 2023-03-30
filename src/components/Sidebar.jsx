import React from 'react'
import { Stack } from '@mui/material'
import {categories} from '../utils/constants'

const selectedCategory = 'New'

export const Sidebar = () => (

    <Stack
        direction = "row"
        sx = {{
            overflowY:"auto",
            height:{sx:"auto", md: "95%"},
            flexDirection:{md:"column"},
        }}>
            
            {categories.map((category) => (
                <button 
                className = "category-btn"
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                color : 'white'}}
                // 这个color如果不注明 就是黑色的 和背景混为一体
                key = {category.name}
                >
                    <span style = {{color: category.name === selectedCategory? 'white': 'red'
                , marginRight:'15px'}}>{category.icon}</span>
                    <span style={{opacity: category.name === selectedCategory? '1':'0.7'}} >{category.name}</span>
                    
                </button>





                // 用map来把每一个icon和name都渲染一下呗 
                // 这两个span组成一个元素 然后渲染全部的元素
            ))}

    </Stack>

)


export default Sidebar