---
star: true
category:
  - Vue
tag:
  - Vue3
---
# Vue3基础



## **ref 原理**

## **reactive 原理**

与将内部值包装在特殊对象中的 ref 不同，`reactive()` 将使对象本身具有响应性：

```js
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

## **参考资料**

[「Vue2+Vue3」 的 62 个知识点，看看你掌握了几个？](https://mp.weixin.qq.com/s/CAYPxaDrKChSgO1PMUGcAg)