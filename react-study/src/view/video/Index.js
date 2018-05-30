import React from 'react'
import Head from "../../components/head/Index"
import BottomBar from "../../components/bottom/Index"
const tabs = [
  {'title':'推荐','href':'', 'icon':'iconfont bigicon icon-faxian'},
  {'title':'音乐','href':'','icon':'iconfont bigicon icon-shipin1'},
  {'title':'Showtime','href':'','icon':'iconfont bigicon icon-shipin1'},
  {'title':'mv','href':'','icon':'iconfont bigicon icon-shipin1'},
  {'title':'二次元','href':'','icon':'iconfont bigicon icon-shipin1'}
];
class Video extends React.Component{
  render() {
    return (
      <div className='find'>
        <Head tabs={tabs}/>
        <BottomBar path={this.props.location.pathname}/>
      </div>
    )
  }
}
export default Video
