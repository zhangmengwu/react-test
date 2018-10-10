/*定义一个父组件，并在子组件内传递不同子节点
* 是使用props.children获取所有的子节点
* 虽然说组件上父组件的传递的属性与组件的props是意义对应的，但是有props.children不是由父组件传递的数据，是传递的子节点
* */
import React, {Component} from "react";
import Son from "./son"
export default class Parent extends Component{
    render(){
        return (
            <div>
                <Son>
                    <h1>哈哈哈哈或</h1>
                    <a href="###">啊啊啊啊啊</a>
                    <p>咔咔咔咔咔咔扩扩</p>
                </Son>
            </div>
        )
    }
}