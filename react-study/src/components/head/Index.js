import React from 'react'
import {SearchBar} from 'antd-mobile'
import './Index.css'
class Head extends React.Component{
  render() {
    return (
    <SearchBar class='search' placeholder="Search" maxLength={8} />)
  }
}
export default Head
