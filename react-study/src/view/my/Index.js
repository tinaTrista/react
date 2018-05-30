import React from 'react'
import MyTitle from "../../components/head/MyTitle"
import BottomBar from "../../components/bottom/Index"

class My extends React.Component{
  render() {
    return (
      <div className='find'>
        <MyTitle/>
        <BottomBar path={this.props.location.pathname}/>
      </div>
    )
  }
}
export default My
