import React from 'react'
import Table from 'antd/es/table'

import './List.css'

class List extends React.Component {
  columns = [
    {title: '所属品类', dataIndex: 'productCategory'},
    {title: '项目类别', dataIndex: 'prjCategory'},
    {title: '项目编号', dataIndex: 'ple'},
    {title: '项目名称', dataIndex: 'prjName'},
    {title: '项目状态', dataIndex: 'pl'},
    {title: '项目经理', dataIndex: 'prjManager'},
    {title: '所属部门', dataIndex: 'department'},
    {title: '项目计划时间', dataIndex: 'prjDate'}
  ]
  render () {
    // console.log(this.props)
    return (
      <div className="listzj">
        <Table 
          columns = {this.columns} 
           dataSource = {this.props.todos} 
          //  rowKey= 'id'
        ></Table>
      </div>
    )
  }
}

export default List
