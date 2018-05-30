import React from 'react'

import BottomBar from "../../components/bottom/Index"
class User extends React.Component{
  render() {
    return (
      <div>
      <span>hello User</span>
      <BottomBar path={this.props.location.pathname}/>
      </div>
    )
  }
}
export default User
