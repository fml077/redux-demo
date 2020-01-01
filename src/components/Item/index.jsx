import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Item extends Component {
  // 4. 在子组件中，使用contextTypes静态属性，声明需要获取父组件放入全局context中的参数类型
  static contextTypes = {
    title: PropTypes.string
  }
  render() {
    return (
      <div>
        这是在三级子组件通过context获取顶层全局变量：
         {/* 5. 在子组件需要的地方，获取全局参数this.context.全局属性名 */}
        <p>{this.context.title}</p>
      </div>
    )
  }
}
