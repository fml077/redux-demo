import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './App.css';
import List from './components/List'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <List></List>
//       </header>
//     </div>
//   );
// }

// export default App;

// context：维护跨级组件信息的传递
/* context属性的使用步骤：
【准备阶段】：
1. 在产生参数的最顶级组件中，使用childContextTypes静态属性来定义需要放入全局参数的类型
2. 在父组件中，提供状态，来管理数据
3. 声明子组件获取全局参数的方式
【使用】：
4. 在子组件中，使用contextTypes静态属性，声明需要获取父组件放入全局context中的参数类型
5. 在子组件需要的地方，获取全局参数this.context.全局属性名
 */
export default class App extends Component {
  // 1. 在产生参数的最顶级组件中，使用childContextTypes静态属性来定义需要放入全局参数的类型
  static childContextTypes = {
    title: PropTypes.string
  }
  // 2. 在父组件中，提供状态声明
  state = {
    title: '这是顶层全局变量title'
  }

  // 3. 声明子组件获取全局参数的方法
  getChildContext() {
    return { title: this.state.title }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="context">
          context：维护跨级组件信息的传递
          <br />
          context属性的使用步骤：
          <br />
          【准备阶段】：
          <br />
          1. 在产生参数的最顶级组件中，使用childContextTypes静态属性来定义需要放入全局参数的类型
          <br />
          2. 在父组件中，提供状态，来管理数据
          <br />
          3. 声明子组件获取全局参数的方式
          <br />
          【使用】：
          <br />
          4. 在子组件中，使用contextTypes静态属性，声明需要获取父组件放入全局context中的参数类型
          <br />
          5. 在子组件需要的地方，获取全局参数this.context.全局属性名
          </div>
          <br />
          <List></List>
        </header>
      </div>
    )
  }
}
