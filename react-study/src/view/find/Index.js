import React from 'react'
import Title from "../../components/head/Title"
import TabSpan from '../../components/head/TabSpan'
import CardList from '../../components/List/Index'
import Carouse from "../../components/head/Carouse"
import BottomBar from "../../components/bottom/Index"
const tabs = [
  {'title':'发现音乐','href':'', 'icon':'iconfont bigicon icon-faxian'},
  {'title':'主播电台','href':'','icon':'iconfont bigicon icon-shipin1'}
];

// tabIndex 状态提升
class Find extends React.Component{
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {
      'tabIndex': 0
    }
  }
  handleTabChange(value) {
    this.setState({tabIndex: value});
  }
  render() {
    return (
      <div className='find'>
        <Title/>
        <TabSpan tabs={tabs} onTabChange={this.handleTabChange} />
        <Carouse />
        <CardList/>
        <BottomBar path={this.props.location.pathname}/>
      </div>
    )
  }
}
export default Find
