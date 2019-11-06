import React from 'react'

import './cz.css'

import { Icon } from 'antd';

class Cardzj extends React.Component {
  
  render () {
    // console.log(this.props)
    return (
      <div className="box">
        <div className="box1">
        </div>
        <div className="box2">
          <p className="box2p">{this.props.todos.prjName}</p>
          <p>项目经理：{this.props.todos.prjManager}</p>
          <p>立项日期：{this.props.todos.prjStartDate}</p>
          {this.props.todos.taskCount||this.props.todos.taskCount===0 ?  <p>任务：{this.props.todos.taskCount} &nbsp;完成：{this.props.todos.taskDoneCount}&nbsp;进行：{this.props.todos.taskDoingCount}&nbsp;</p> : null}
        </div>
        <div className="box3">
          <p className="box3p">{this.props.todos.zhuangtai}</p>
          <div className="icons-list">
            <Icon type="heart" theme="filled"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cardzj