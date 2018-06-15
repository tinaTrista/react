import React from 'react'
import './TabSpan.css'
class TabSpan extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      'activeTab':0
    };
  }
  handleClick(index) {
    this.props.onTabChange(index);
  }
  render() {
    let tabwidth = (100 / this.props.tabs.length+1) + '%' ;
    return (
      <div className="TabSpan">
      {
        this.props.tabs.map((item, index) =>
          <div
          key={index}
          style={{width:tabwidth}}
          className='tab'
          onClick={this.handleClick.bind(this, index)}
          >
          <div className={this.state.activeTab === index ? 'span active' : 'span'}>{item.title}</div>
          </div>
        )
      }
      </div>
    );
  }
}
export default TabSpan
