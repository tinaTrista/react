import React from "react"
import $http from "../../axios"
import "../../data/mock"
import {WingBlank} from 'antd-mobile'
import './Index.css'

class CardList extends React.Component {
  constructor(){
      super();
      this.state = {
          hotList:[]
      }
  }
  // mounted 之前获取数据
  componentDidMount() {
    $http.get('/proxy/plist/index&json=true').then(res => {
        this.setState({
            hotList:res.data.plist.list.info
        })
    }).catch(err => {
      console.log(err)
    })
    // 利用mock伪装的假数据
    $http.get("/test").then(
              (successData) => {console.log(successData);},
              (fileData) => {console.log(fileData);}
    );
  }
  // 展示数据
  render() {
    const list = this.state.hotList.map((item,index) =>
        <div key={index} className="card" >
        <div className="img" style={{backgroundImage:'url(' + item.imgurl.replace('{size}','400') + ')'}}></div>
        <div className='specialname'>{item.specialname}</div>
        </div>
    )
    return(
      <div className="cardList">
      {list}
      </div>
    )
  }
}
export default CardList
