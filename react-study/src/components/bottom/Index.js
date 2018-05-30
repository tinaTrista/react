
import {Link} from 'react-router-dom'
import React from 'react'
import "./Index.css"
const tabs = [
  {'title':'发现','href':'/', 'icon':'iconfont bigicon icon-faxian'},
  {'title':'视频','href':'/video','icon':'iconfont bigicon icon-shipin1'},
  {'title':'我的','href':'/my','icon':'iconfont bigicon icon-music'},
  {'title':'朋友','href':'/friends','icon':'iconfont bigicon icon-pengyou'},
  {'title':'账号','href':'/user','icon':'iconfont bigicon icon-zhanghao'}
];

class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const listItems = tabs.map((item, index) =>
      <Link key={index} to={item.href}
      className={this.props.path === item.href ? 'link active' : 'link'}>
         <span className={item.icon}></span>
         <span className='barTitle'>{item.title}</span>
      </Link>
    );
    return (
      <div className="bottomNav">
      {listItems}
      </div>
    );
  }
}
export default BottomBar
