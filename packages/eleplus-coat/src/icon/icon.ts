import { ExtractPropTypes, PropType } from 'vue'
import type { Component } from 'vue'
import type { iconPropType } from '@zhou/utils'

const namePropType = [String, Object, Function] as PropType<string | Component>

export const zIconProps = {
  // 按钮图标有三种来源
  //    (Object || Function) 直接使用传入组件
  //    String 使用ElIcon渲染，图标来源有两种 存在于ElementPlusIconsVue，使用捞取对应组件渲染，不存在则添加一个class值为name的i标签
  name: {
    type: namePropType,
    default: ''
  }
}

export type ZIconProps = ExtractPropTypes<typeof zIconProps>
export type IconType = typeof iconPropType
