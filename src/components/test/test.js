/*构建一个test组件
* 需要导入的内容：React,Component
* 组件的本身的状态：
* 父组件传递的props：
* 导出：test组件
* */

import React from "react"
class Test extends React.Component{
    render(){
        return (
            <div>
                <p>this is test component</p>
            </div>
        )
    }
}
export default Test;