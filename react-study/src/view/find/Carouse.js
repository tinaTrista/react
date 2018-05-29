import React from 'react'
import {Carousel} from 'antd-mobile'
// src={`images/${val}.png`} 引入外部图片


class Carouse extends React.Component{
  state = {
    data: ['1', '2', '3'],
    imgHeight: 80,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['red', 'red2', 'red3'],
      });
    }, 100);
  }
  render() {
    return (
      <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
      >
      {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require('../../static/images/red.png')}
                alt=""
                style={{ width: '100%', height: '80px', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))
      }
      </Carousel>
    )
  }
}
export default Carouse
