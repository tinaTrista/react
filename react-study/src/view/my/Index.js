import React from 'react'
import MyTitle from "../../components/head/MyTitle"
const tabs = [
  {'title':'发现音乐','href':'', 'icon':'iconfont bigicon icon-faxian'},
  {'title':'主播电台','href':'','icon':'iconfont bigicon icon-shipin1'}
];
class My extends React.Component{
  render() {
    return (
      <div className='find'>
        <MyTitle/>
      </div>
    )
  }
}
export default My
