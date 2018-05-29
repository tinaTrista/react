import React from 'react'
import './Index.css'
import Title from "./Title"
import TabBar from './TabBar'

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
        <TabBar tabs={this.props.tabs}/>
      </div>
    )
  }
}
export default Head
