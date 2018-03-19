

- 所有的私有方法都用`_`开头，所有的事件监听方法都用`handdle`开头。把事件监听方法传给组件的时候，属性名用`on`开头。统一将处理事件命名语义化
> 监听(on)`CommentInput`的`Submit`事件，并且交给`this`去处理(handle)。

- 组件的内容编写顺序如下
1. static 开头的类属性，如`defaultProps`、`propTypes`。
2. 构造函数，`constructor` 
3. getter/setter
4. `_`开头的私有方法
5. 事件监听方法，`handle`
6. `render*`开头的方法，有时候`render()`方法里面的内容会分开到不同函数里面进行，这些函数都以`render()`开头
7. `render()`方法

----

- setState进行多次计算，但是只会重新渲染一次。因为React内部会把JavaScript时间循环中的消息队列的同一个消息中的`setState`都进行合并以后再重新渲染。
---


- 不能直接修改state的属性值

```js
    this.state.status = true // 会报错
```

必需在`setState`函数中赋值

```js
    this.setState({
        status: true
    })
```
---


- 当你调用 `setState` 的时候，React.js 并不会马上修改 `state`。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到`state`当中，然后再触发组件更新。
---


- `state`的主要作用是用于组件保存、控制、修改自己的可变状态。它是一个局部的、只能被组件自身控制的数据源。`state`中状态可以通过`setState`方法进行更新，`setState`会导致组件重新渲染。



- `props`的作用是让使用该组件的父组件传入参数来配置该组件。它是外部传入进来的配置参数，内部无法进行修改。除非外部主动传入新的`props`，否则组件`props`保持不变。


 
- 尽量少使用`state`，尽量多使用`props`。
> 没有`state`的组件叫无状态组件，无状态可以减少状态管理的复杂度，在一定程度上增强组件的可复用性。
---


- 函数式组件写法
```js
    const HelloWorld = (props) => {
        const sayHi = (event) => alert('Hello World')
        return (
            <div onClick={sayHi}>Hello World</div>
        )
    }
```
---




- 循环
```js
array.map((el, index) => {
    return(
        <div>
            <p>列表-{index}</p>
        </div>
    )
})
```
这样使用是没问题，但是打开控制台会看到提示`key`相关的错误。这是由于React.js内部处理机制，如果不加`key`话，当数据改变时，可以只是列表的位置交换了一下，但是React不知道，它就会重新渲染DOM，大大的增加DOM的操作。但是加上`key`标识，React就知道这两个元素只是交换了位置。
```js
array.map((el, index) => {
    return(
        <div key={index}>
            <p>列表-{index}</p>
        </div>
    )
})
```
但是最好不要以`index`作为`key`，标准的做法还是以`id`作为`key`


---

状态提升


---

挂载阶段的生命周期
```
-> constructor()
-> componentWillMount()
-> render()
// 然后构造 DOM 元素插入页面
-> componentDidMount()
-> componentWillUnmount() // 即将从页面中删除
// 从页面中删除
```


- 关于组件自身的状态都会放到`constructor`中去做。

- 一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 `componentWillMount` 里面进行。

- 一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中。


补充关于更新阶段的组件生命周期

- `shouldComponentUpdate(nextProps, nextState)`：可以通过这个方法控制组件是否重新渲染。如果返回`false`组件就不会重新渲染了。这个对于优化非常有用。
- `componentWillReceiveProps(nextProps)`：组件从父组件接收到新的`props`之前调用。
- `componentWillUpdate()`：组件开始重新渲染之前调用。
- `componentDidUpdate()`：组件重新渲染并把更改变更到真实的DOM以后调用。


---


`setState` 只能在已经挂载或者正在挂载的组件上调用


---

`ref`获取以挂载的DOM节点，但是尽量少用


---

使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 `props.children` 获取到，这种组件编写方式在编写容器类型的组件当中非常有用。而在实际的 React.js 项目当中，我们几乎每天都需要用这种方式来编写组件。


---


使用`dangerouslySetInnerHTML`防止`HTML`转义
```
 render () {
    return (
      <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}} />
    )
  }
```


---


style写法
```
<div style={{color: 'red', width: this.state.width}}></div>
```


---


通过 PropTypes 给组件的参数做类型限制，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上 propTypes，也让组件的开发、使用更加规范清晰。

安装`prop-types`

```shell
npm install --save prop-types
```
它可以帮助我们验证 props 的参数类型，例如：


```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    }

    render () {
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}
```

注意我们在文件头部引入了 `PropTypes`，并且给 `Comment` 组件类添加了类属性 `propTypes`，里面的内容的意思就是你传入的 `comment` 类型必须为 `object`（对象）。

通过`defaultProps`设置默认值来配置可选参数


通过 `isRequired` 关键字来强制组件某个参数必须传入：

```js
    ...
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    ...
```

React.js 提供的 PropTypes 提供了一系列的数据类型可以用来配置组件的参数：

```
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
PropTypes.node
PropTypes.element
...
```

组件参数验证在开发大型组件库时相当有用，可以帮助我们迅速定位类型错误，让开发更加规范。



