/*构建一个test组件
* 需要导入的内容：React,Component
* 组件的本身的状态：
* 父组件传递的props：
* 导出：test组件
* */

import React, { Component } from "react"
import './myTest.css'
import PropTypes from "prop-types"
export default class Test extends Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
    //    静态属性
        num: PropTypes.number,
        obj: PropTypes.object,
        title: PropTypes.string.isRequired
    }
    static defaultProps = {
        title: "good job"
    }
    render(){
        return (
            <div className="app-border">
                <p className="color ">this is test component</p>
                <p>num为{this.props.num}-{this.props.obj.a}</p>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

// Test.propTypes = {
// //    里面是各种属性验证
//     num: PropTypes.number,
//     obj: PropTypes.object,
//     title: PropTypes.string.isRequired//如果没有该属性就会有警告（父组件没有传值并且无默认值的）
// }

// Test.defaultProps = {
//     title: "good job"
// }

// export default Test;
