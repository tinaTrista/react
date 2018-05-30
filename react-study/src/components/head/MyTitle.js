import React from 'react'
import './Index.css'
class MyTitle extends React.Component{
  render() {
    return (
      <div className="title">
          <span className="iconfont bigicon icon-yun"></span>
          <span className='search'>我的音乐</span>
          <span className="iconfont bigicon icon-xinhao"></span>
      </div>
    )
  }
}
export default MyTitle
