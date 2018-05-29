import React from 'react'
import Head from "../../components/head/Index"
import Carouse from "./Carouse"
const tabs = [
  {'title':'发现音乐','href':'', 'icon':'iconfont bigicon icon-faxian'},
  {'title':'主播电台','href':'','icon':'iconfont bigicon icon-shipin1'}
];
class Find extends React.Component{
  render() {
    return (
      <div className='find'>
        <Head tabs={tabs}/>
        <Carouse />
      </div>
    )
  }
}
export default Find
