# Icon 图标

此组件基于 [ElementPlus.ElIcon](https://element-plus.gitee.io/zh-CN/component/icon.html) 二次封装

## 组件图标

直接把组件传递给`name`

<demo src="./example/basic.vue"></demo>

## 字符串图标

传入一个 `String` 类型的值时，组件会自动从 **ElementPlusIconsVue** 或者在 引入的 **iconfont 图标库** 中查找并渲染

> **使用 ElementPlusIconsVue 注意项**
>
> - 在字符串图标中使用时，必须**引入 [`ElementPlusIconsVue`](https://element-plus.gitee.io/zh-CN/component/icon.html)**

> **使用 iconfont 图标库注意项**
>
> - 引入 iconfont 图标库中的 `Font Family` 只能为`'iconfont'`
> - 当前 iconfont 图标库只支持引入 css 文件，通过 class 来进行渲染。

<demo src="./example/strIcon.vue"></demo>
