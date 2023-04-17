import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Paper
      // 创建一个带有背景颜色和阴影效果的纸片元素
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        // paddingLeft: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        // marginRight: {sm: 5}
      }}
    >
      <input
        className="search-bar" //这个属性指定了输入框的 CSS 类名，可以用来在样式表中选择和样式化输入框。
        placeholder="Search..." //在输入框没有文本时显示。
        value="" // 指定了输入框的初始值为空字符串。当用户输入文本时，这个属性将随着输入框的值进行更新。
        onChange={() => {}}
      />

      <IconButton
        type="submit"    //type = "submit"：这个属性指定了按钮的类型为“提交”，这意味着当用户单击按钮时，会将表单数据提交给服务器。在这个例子中，当用户单击搜索按钮时，会执行搜索操作，并将搜索查询提交给服务器。
        sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

//  {/* onSubmit 属性期望传递一个函数，这个函数将在表单被提交时调用，以便执行表单的提交操作 */}
