import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react'


const tabs = [
  { title: '关注' },
  { title: '推荐' },
  { title: '热榜' },
];

const TabTop = () => (
  <div>
    <WhiteSpace />
    <div style={{ height: 50 }}>
      <Tabs tabs={tabs}
        initalPage={'t2'}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </div>
  </div>
);
export default TabTop
