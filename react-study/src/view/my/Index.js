import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import './my.css'
import logo from '../../static/images/default.png'

class My extends React.Component{
  render() {
    return (
      <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <Card.Body>
          <img src={logo}/>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
      </Card>
      <WhiteSpace size="lg" />
    </WingBlank>)
  }
}
export default My
