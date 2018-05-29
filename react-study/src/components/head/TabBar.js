
import {Link} from 'react-router-dom'
import React from 'react'
import './TabBar.css'
class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let tabwidth = (100 / this.props.tabs.length) + '%' ;
    return (
      <div className="tabbar">
      {
        this.props.tabs.map((item, index) =>
          <Link key={index} to={item.href} style={{width:tabwidth}} className='link'>
             {item.title}
          </Link>
        )
      }
      </div>
    );
  }
}
export default TabBar
