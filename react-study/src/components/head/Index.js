import React from 'react'
import {SearchBar,Button} from 'antd-mobile'
import './Index.css'
class Head extends React.Component{
  render() {
    return (
      <div className="head">
          <span className="iconfont bigicon icon-luyin"></span>
          <SearchBar className="search" placeholder="猜你最喜欢 Hotel California" maxLength={8} />
          <span className="iconfont bigicon icon-xinhao"></span>
      </div>
    )
  }
}
export default Head
