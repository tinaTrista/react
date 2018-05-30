import React from 'react'
import './TabSpan.css'
class TabSpan extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
    };
  }
  handleClick(index) {
    this.props.onTabChange(index);
  }
  render() {
    let tabwidth = (100 / this.props.tabs.length) + '%' ;
    return (
      <div className="TabSpan">
      {
        this.props.tabs.map((item, index) =>
          <div
          key={index}
          style={{width:tabwidth}}
          className='span'
          onClick={this.handleClick.bind(this, index)}
          >
          <span>{item.title}</span>
          </div>
        )
      }
      </div>
    );
  }
}
export default TabSpan
