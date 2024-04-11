---
star: true

order: 3

category:

  - React

tag:

  - React组件渲染

---



# **DOM 渲染**

React DOM 的渲染采用 render 方法

## **虚拟 DOM 转成 真实 DOM 流程**

### 创建虚拟 DOM 

假设需要渲染如下真实 DOM：

```html
<ul id="list">
  <li class="item">Item1</li>
  <li class="item">Item2</li>
  <li class="item">Item3</li>
</ul>
```

例如上面的 DOM 结构就可以简单的表示：

```js
var el = require('./element');
var ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3']),
]);
```

将以上 DOM 结构使用 DOM 对象表示，只需要记录它的节点类型、属性，子节点：

```js
// element.js
function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}

module.exports = function (tagName, props, children) {
  return new Element(tagName, props, children);
};
```

### **渲染真实 DOM**

react 使用 `render` 方法将以上 `ul`  渲染成真正的 `<ul>` 标签：

```js
Element.prototype.render = function () {
  // 根据 tagName 构建
  var el = document.creatElement(this.tagName);
  var props = this.props;

  // 设置节点的 DOM 属性
  for (var propName in props) {
    var propValue = props[propName];
    el.setAttribute(propName, propValue);
  }

  var children = this.children || [];

  children.forEach(function (child) {
    // 如果子节点也是虚拟 DOM，则递归构建 DOM 节点
    var childEl = child instanceof Element ? child.render() : document.createTextNode(child); // 如果字符串,只构建文本节点
    el.appendChild(childEl);
  });

  return el;
};
```

`render()` 方法会根据 `tagName` 构建一个真正的 DOM 节点，然后设置这个节点的属性，递归地把自己的子节点也构建起来。

### **挂载 DOM**

最后，通过 `document.body.appendChild` 挂载 DOM 到指定 DOM：

```js
var ulRoot = ul.render();
document.body.appendChild(ulRoot);
```

`ulRoot` 是真正的 DOM 节点，把它塞入文档中，这样的 `<body>` 里面就有了真正的 `<ul>` 的 DOM 结构。

```html
<ul id="list">
  <li class="item">Item1</li>
  <li class="item">Item2</li>
  <li class="item">Item3</li>
</ul>
```

