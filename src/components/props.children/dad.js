/*定义一个父组件，并在子组件内传递不同子节点
* 是使用props.children获取所有的子节点
* 虽然说组件上父组件的传递的属性与组件的props是意义对应的，但是有props.children不是由父组件传递的数据，是传递的子节点
* */
import React, {Component} from "react";
import Son from "./son"
export default class Dad extends Component{
    render(){
        return (
            <div>
                <Son>
                    <span>不不不不不不</span>
                    <var>男男女女女女女</var>
                </Son>
            </div>
        )
    }
}