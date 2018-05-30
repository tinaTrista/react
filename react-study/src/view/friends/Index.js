import React from 'react'
import BottomBar from "../../components/bottom/Index"
class Friends extends React.Component{
  render() {
    return (
      <div>
      <span>hello Friends</span>
      <BottomBar path={this.props.location.pathname}/>
      </div>
    )
  }
}
export default Friends
