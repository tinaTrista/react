
import {Link} from 'react-router-dom'
import React from 'react'
import "./bar.css"
const tabs = [
  {'title':'发现','href':'/find'},
  {'title':'视频','href':'/video'},
  {'title':'我的','href':'/my'},
  {'title':'朋友','href':'/friends'},
  {'title':'账号','href':'/user'}
];

const listItems = tabs.map((item, index) =>
  <Link key={index} to={item.href}>{item.title}</Link>
);
class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="bottomNav">
      {listItems}
      </div>
    );
  }
}
export default BottomBar
