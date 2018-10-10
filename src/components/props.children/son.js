/*定义一个父组件，并在子组件内传递不同子节点
* 是使用props.children获取所有的子节点
* 虽然说组件上父组件的传递的属性与组件的props是意义对应的，但是有props.children不是由父组件传递的数据，是传递的子节点
* props.children可以通过React.Children.map()进行遍历
* */
import React, {Component,Children} from "react";
export default class Son extends Component{
    constructor(props){
        super(props);
        console.log(this.props.children)
    }
    render(){
        return (
            <div>
                <ul>
                    {
                       Children.map(this.props.children,(item,index) => {
                           return <li key={index}>{item}</li>
                       })
                    }
                </ul>
            </div>
        )
    }
}