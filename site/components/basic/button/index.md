# Button 按钮

此组件基于 [ElementPlus.ElButton](https://element-plus.gitee.io/zh-CN/component/button.html) 二次封装

## 基础按钮

基础用法与 ElButton 组件完全相同

<demo src="./example/basic.vue"></demo>

## 图标按钮

按钮图标不采用原组件的 icon 配置，使用[ZIcon](../icon/index.md)实现

实现可传入 `String`或者`Component` 类型

<demo src="./example/iconBtn.vue"></demo>

## 文字提示图标

增加`tips`功能，在按钮外层嵌套一个 ElToolTip 组件实现

<demo src="./example/tipBtn.vue"></demo>
