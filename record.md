## 被禁用的表单元素，无法在提交的时候，获取到他的值
## 在存在含有多个同名模板渲染到页面之后，再绑定事件，容易产生重复触发的问题，保险起见，应该直接在渲染到页面之前,在Js内就直接绑定相对事件，防止意外报错
## 在模块的回调函数中，禁止声明和模块依赖项的返回值一样的变量名称，否则会将其覆盖
## 如果在return false 前面发生报错的话 根本不会取消表单默认提交  所以还是会刷新页面，吧报错也 一并刷新掉了  造成  renturn false  无效的错觉！！！
## require 使用text.js的模板的时候，模板里面如果报错了，即使注释了错误也还是存在，只能删除
## textarea标签的值，必须放到标签中间，才能够显示和获取
## 不管是富文本编辑器还是eChart插件，因为他们的API中含有获取DOM属性的操作，所以必须将模板添加到页面上后，才可以获取DOM元素的属性，区别与绑定事件！