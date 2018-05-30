import React from 'react'
import './Index.css'
import Title from "./Title"
import TabSpan from './TabSpan'

class Head extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="head">
        <Title/>
        <TabSpan tabs={this.props.tabs}/>
      </div>
    )
  }
}
export default Head
